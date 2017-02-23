#!/usr/bin/env node
var express = require('express');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.get('/', function(pet, res){
  res.sendfile(__dirname + '/gh-pages/index.html');
});

app.use(express.static(path.resolve('gh-pages')));

app.listen(app.get('port'));

console.log("Servidor Express escuchando en modo %s", app.settings.env + " por el puerto: 8080");
