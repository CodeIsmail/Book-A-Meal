'use strict';

var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hello worlld');
});

app.listen(3000, function () {
  console.log('Server started at port 3000');
});