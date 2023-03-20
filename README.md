<!--
 * @Author: YuhaoWU
 * @Date: 2020-02-07 16:36:40
 * @LastEditors: YuhaoWU
 * @LastEditTime: 2023-03-20 19:28:33
 * @Description:
-->

# todo-list-app

<WebDev Bootcamp 2019> course mini-project

[demo](https://todo-4mb9.onrender.com)

## NPM and NodeJS

## node.js

node.js 是一个 JavaScript 运行时，**它让 JavaScript 脱离了浏览器环境，可以直接在计算机上运行**，如访问 PC 其他组件/在 server 端(其他的电脑上)运行，所以让 JS（或者说框架 Express) **可以作为后端语言，极大地拓展了 JavaScript 用途**。

node.js 优点：有非阻塞，事件驱动 I/O 等特性，从而让高并发（high concurrency）在的轮询（Polling）和 comet 构建的应用中成为可能

npm
npm 是 NodeJS 的包管理器(NodeJS package manager)，一般是随同 NodeJS 一起安装，能解决 NodeJS 代码部署上的很多问题：

- 在 Node.js 上开发时，会用到很多别人已经写好的 javascript 代码，如果每当我们需要别人的代码时，都根据名字搜索一下，下载源码，解压，再使用，会非常麻烦——于是就出现了包管理器 npm。大家把自己写好的源码上传到 npm 官网上，如果要用某个或某些个，直接通过 npm 安装就可以了

注意：
如果您想更新到 XXX modules 的最新**主版本**（例如从 5.x.x 更新到 6.x.x），则需要**手动更新 package.json 文件中的版本范围，然后再运行 npm update 命令**，才能生效。

## Route: 不只是 path 变量

route 路由，在 web 开发中，“route”是**指根据 url， 分配到对应的处理程序**。 就是一个**路径的解析，根据客户端提交的路径，将请求解析到相应的控制器上**。
a mechanism where **HTTP requests are routed to the code that handles them**. To put simply, in the Router you **determine what should happen when a user visits a certain page**.

## bodyParser: 解析 request 的包

一个 HTTP 请求体解析中间件 ，使用这个模块可以解析 JSON、Raw、文本、URL-encoded 格式的请求体，Express 框架中就是使用这个模块做为**请求体**解析中间件。

## EJS(Embedded JavaScript templating): 一套简单的模板语言，只是普通的 JavaScript 代码而已 - 在 HTML 文件内使用 JavaScript 代码语法来进行 HTML 渲染

EJS: embedded javascript templating 是 templating language， to **generate HTML markup with plain JS**.
Node.js 支持模板引擎有非常多, 之所以选择讲 EJS, 是因为个人觉得它上手最快, 可以让你**在不破坏 HTML 文档结构的情况下, 直接在标签内书写 JavaScript 代码**. 对于前端开发人员来说学习成本很低.

### EJS setup：

默认 templates.ejs 路径：为了管理方便, 所有的 EJS 模板放在了 views 目录。要新建 views 的 folder——"view engine" by default will go and look for the files to be rendered.

### 基本插入模板: .ejs 文件的，的 markup 符号 <%= 插入内容 %>

EJS 用起来非常简单, 你只要像之前写 HTML 代码一样去写就好了. 只要最后文件后缀名改成 .ejs 那这就是一个 EJS 模板文件了. 在模板中, <% %> 括起来的内容会作为 Javascript 代码来编译  
.ejs 文件: 里面的 markup 代码也是用 html，但是.ejs 文件格式，让可以在这些 HTML 中**加入 ejs 格式 <%= 插入内容 %>的 Markup**，插入内容可以是 server 传来的变量，会**被 render**

### EJS.layouts：.ejs 文件之间的互相插入别的 ejs(html code block)，合成共筑 新完整页面 html

常见的**页头 header 部分 HTML 和页尾 footer 部分的**内容。 在网站中的不同页面里重复出现. 如果在每一个 HTML 文件里都重新写一遍, 很明显是低效率地 "笨" 行为. 而且如果日后需要更改内容, 你总不能一个文件一个文件地去改吧. 我们可以将这些通用的组件提炼出来作为 "模板片段".

在 EJS 模板中, 通过 **include 指令可以将其他 ejs 模板的 html code block 引入到当前模板**，要知道**html code 本身肯定是不能互相引用插入的！！！**.
例如，如果我有 "./index.ejs" 和 "./header.ejs" 两个模板文件，我可以通过 <%- include('./header'); %> 代码让 header.ejs 被 index.ejs 引入.

大多数情况下, 我们需要使用能够输出原始内容的标签 <%- 在 include 指令上，避免对输出的 HTML 代码做转义处理。

## node module 怎么构建的？

## MongoDB 和 Mongoose 5.X 包

相对于 SQL 数据库，NoSQL 的**Collection 可以对应到表（table），Document 可以对应到行（row）或记录（record）**

Mongoose 5.X **不要轻易升级到 6，不然要大改**

## Core knowledge points: RESTful 7 routes

![RESTful 7 routes](https://i.loli.net/2019/08/30/CLEgtMA1FNbKexj.png)

### What are routes?

Routes are the code that are responsible for listening and receiving requests and then deciding what to send back.

### What is CRUD?

4 basic types of (DB) actions: Create, Read, Update, and Delete.

### How this helps?

By following this pattern, you don’t have to reinvent the wheel every time you build a new CRUD app. The routes and method names have already been decided so that you can run the action by directly editing URL !!!
