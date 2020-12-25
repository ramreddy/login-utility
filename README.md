![Alt text](https://img.shields.io/npm/v/login-utility?style=plastic "login-activity")
![Alt text](https://img.shields.io/bundlephobia/min/login-utility "login-activity")
![Alt text](https://img.shields.io/npm/l/login-utility "login-activity")
![Alt text](https://img.shields.io/snyk/vulnerabilities/github/ramreddy/login-utility "login-activity")

# login-utility
A **Node Js** library for getting basic user details when logged in  **Ex:** IP, OS Type, Browser details, Device type, and screen size, etc.

[![NPM](https://nodei.co/npm/login-utility.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/login-utility/)

## Installation

```
npm i login-utility
```

## Basic Usage

```
var express = require('express');
var app = express();
var loginUtility = require('login-utility');


app.get('/', async (req, res) =>{
    const lu = new loginUtility(req);
    const ip = await lu.getIP();
   res.send('My IP: '+ip);
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("app listening at http://%s:%s", host, port)
})

```
