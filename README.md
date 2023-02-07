# todo-list-app
<WebDev Bootcamp 2019> mini-project

[demo](https://mini-todo-list2019.herokuapp.com/)


## NPM and NodeJS
## node.js
node.js 是一个JavaScript 运行时，**它让JavaScript 脱离了浏览器环境，可以直接在计算机上运行**，如访问PC其他组件/在server端(其他的电脑上)运行，所以让JS（或者说框架 Express) **可以作为后端语言，极大地拓展了JavaScript用途**。

node.js优点：有非阻塞，事件驱动I/O等特性，从而让高并发（high concurrency）在的轮询（Polling）和comet构建的应用中成为可能

npm
npm 是 NodeJS 的包管理器(NodeJS package manager)，一般是随同 NodeJS 一起安装，能解决 NodeJS代码部署上的很多问题：
- 在 Node.js 上开发时，会用到很多别人已经写好的 javascript 代码，如果每当我们需要别人的代码时，都根据名字搜索一下，下载源码，解压，再使用，会非常麻烦——于是就出现了包管理器 npm。大家把自己写好的源码上传到 npm 官网上，如果要用某个或某些个，直接通过 npm 安装就可以了


## Core knowledge points: RESTful 7 routes
![RESTful 7 routes](https://i.loli.net/2019/08/30/CLEgtMA1FNbKexj.png)

### What are routes?
Routes are the code that are responsible for listening and receiving requests and then deciding what to send back.

### What is CRUD?
4 basic types of (DB) actions: Create, Read, Update, and Delete.

### How this helps?
By following this pattern, you don’t have to reinvent the wheel every time you build a new CRUD app. The routes and method names have already been decided so that you can run the action by directly editing URL !!!
