//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const date = require(__dirname + "/date.js"); // 自定义的Module date.js, 和py一样 文件名为包名！
const _ = require("lodash");

const app = express();

// 设置EJS模板
app.set("view engine", "ejs");

// server local path: 'public'
app.use(express.static("public"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function () {
  console.log("Server started on port 3000");
});

mongoose.set("strictQuery", false); // for mongoose 7+
mongoose.connect(
  "mongodb+srv://admin-kenny:1@cluster0-7phca.mongodb.net/todolistDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// const items = ["Buy Food", "Cook Food", "Eat Food"];
// const workItems = [];

const itemSchema = {
  name: String,
};
// Collection可以对应到表（table），Document可以对应到行（row）或记录（record）
// 1. Item collection(table) -- for the items
const Item = mongoose.model("Item", itemSchema);
// replace the items array without DBs
const item1 = new Item({
  name: "Welcome to the todo List",
});
const item2 = new Item({
  name: "Hit the + button to add a new item",
});
const item3 = new Item({
  name: "<-- Tick this to delete",
});
const defaultItems = [item1, item2, item3];

// advanced List's schema: embedded items
const listSchema = {
  name: String,
  items: [itemSchema],
};

// 2. List collection---for the custom pages(except the home)
// One doc in List , One custom page
const List = mongoose.model("List", listSchema);

// main page: default TODO list
app.get("/", function (req, res) {
  const day = date.getDate();

  // get item <-- DB
  Item.find({}, function (err, foundItems) {
    // empty collection: 需initialize
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, function (err) {
        if (err) console.log(err);
        else console.log("Successfully init");
      });
      // Item.find({}).then((post) => {
      //   // empty collection: 需initialize
      //   if (post.foundItems.length === 0) {
      //     Item.insertMany(defaultItems, function (err) {
      //       if (err) console.log(err);
      //       else console.log("Successfully init");
      //     });

      // Insert 完毕，别忘了再次转到"/"，重新render显示成功, ！！
      res.redirect("/");
    } else {
      res.render("list", {
        listTitle: day,
        newListItems: foundItems,
      });
    }

    // mongoose.connection.close()
  });
});

// 除了/的default TODO list 通用custom型
// app.get("/work", function(req,res){
//   res.render("list", {listTitle: "Work List", newListItems: workItems});
// });
app.get("/:customListName", function (req, res) {
  var customListName = _.capitalize(req.params.customListName);
  // find a List doc是否存在
  List.findOne(
    {
      name: customListName,
    },
    function (err, foundList) {
      if (!err) {
        if (!foundList) {
          const list = new List({
            name: customListName,
            items: defaultItems,
          });
          list.save();
          console.log("new list doc: " + list.name + " inserted");
          res.redirect("/" + customListName);
        } else {
          res.render("list", {
            listTitle: customListName,
            newListItems: foundList.items,
          });
        }
      }
    }
  );
});

/* One form, ONE post!!*/
// for 增, from the add form
app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list; // html tag's value: route indentifier

  // new item created MUST!
  const item = new Item({
    name: itemName,
  });

  if (listName == "Today") {
    // current page
    item.save();
    res.redirect("/");
  } else {
    // find the list
    List.findOne({ name: listName }, function (err, foundList) {
      // it is the foundList's item!!
      foundList.items.push(item);
      // don't forget save for permanent storage
      foundList.save();
      res.redirect("/" + listName);
    });
  }
});

// for 删, delete的post--- checkbox's form
app.post("/delete", function (req, res) {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    // Item: will search all DB by its ID
    Item.findByIdAndRemove(checkedItemId, function (err) {
      if (err) console.log(err);
      else console.log("delete Successfully");
    });
    res.redirect("/");
  } else {
    // cannot done only with mongoose operator!! needs mongodb $ operators
    // 或者用PUT + method override
    List.findOneAndUpdate(
      { name: listName },
      { $pull: { items: { _id: checkedItemId } } },
      function (err, foundList) {
        if (!err) res.redirect("/" + listName);
      }
    );
  }
});
