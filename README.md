<!--
 * @Author: YuhaoWU
 * @Date: 2020-02-07 16:36:40
 * @LastEditors: YuhaoWU
 * @LastEditTime: 2023-03-12 14:54:04
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

## Route: 不只是指 path 变量

route 路由，在 web 开发中，“route”是**指根据 url， 分配到对应的处理程序**。 就是一个**路径的解析，根据客户端提交的路径，将请求解析到相应的控制器上**。
a mechanism where **HTTP requests are routed to the code that handles them**. To put simply, in the Router you **determine what should happen when a user visits a certain page**.

## MongoDB 和 Mongoose 5.X 包

相对于 SQL 数据库，NoSQL 的**Collection 可以对应到表（table），Document 可以对应到行（row）或记录（record）**

Mongoose 5.X 不要轻易升级到 6，不然要大改

## Core knowledge points: RESTful 7 routes

![RESTful 7 routes](https://i.loli.net/2019/08/30/CLEgtMA1FNbKexj.png)

### What are routes?

Routes are the code that are responsible for listening and receiving requests and then deciding what to send back.

### What is CRUD?

4 basic types of (DB) actions: Create, Read, Update, and Delete.

### How this helps?

By following this pattern, you don’t have to reinvent the wheel every time you build a new CRUD app. The routes and method names have already been decided so that you can run the action by directly editing URL !!!
