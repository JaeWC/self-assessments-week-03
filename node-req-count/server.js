var url = require("url");
var http = require("http");
var path = require("path");

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, "");

  if (request.method === "POST") {
    // YOUR CODE HERE
    globalCounter.post1 = 1;
    if (request.url === "prop1") {
      globalCounter.prop1++;
    } else if (request.url === "prop2") {
      globalCounter.prop1++;
    }
    response.statusCode = 301;
    response.end(globalCounter.prop1);
  } else if (request.method === "GET") {
    // YOUR CODE HERE
    console.log(globalCounter.prop1);
    response.statusCode = 200;
    response.end(globalCounter.prop1);
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;
