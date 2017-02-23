#!/usr/bin/env node
var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
console.log("Ejecución de herokudeploy");
console.log(stdout); }

exec("git push heroku master && heroku open", puts);
