<img src="https://img.shields.io/npm/v/login-utility?style=plastic"/>
# login-utility
A **Node Js** library for getting basic user details when logged in  **Ex:** IP, OS Type, Browser details, Device type, and screen size, etc.

## Installation

```
npm i login-utility
```

## Basic Usage

```
var express = require('express');
var app = express();
var loginUtility = require('login-utility');


app.get('/', function (req, res) {
    const lu = new loginUtility(req);
    const ip = lu.getIP();
   res.send('My IP: '+ip);
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("app listening at http://%s:%s", host, port)
})

```
