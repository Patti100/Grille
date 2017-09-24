var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(__dirname, + '/js'));
app.use(express.static(__dirname, + '/css'));
app.use(express.static(__dirname, + '/images'));
app.use(express.static(__dirname, + '/fonts'));
app.use(express.static(__dirname, + '/less'));
app.use(express.static(__dirname, + '/menus'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index2.html'));
});

var portnumber = 8080;
app.listen(portnumber);
