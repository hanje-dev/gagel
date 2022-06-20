#!/usr/bin/env node

var parser = require('../lib');
var fs = require('fs');

var filename = process.argv[2];
if (!filename) {
  console.error('no filename specified');
} else {
  var file = fs.readFileSync(filename, 'utf8');
  var ast = parser.parse(file);

  console.log(JSON.stringify(ast, null, '  '));
}
