var url = require("url");
var http = require("http");
var path = require("path");

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, "");

  if (request.method === "POST") {
    // YOUR CODE HERE
    if (request.url === "/prop1") {
      globalCounter.prop1 === undefined
        ? (globalCounter.prop1 = 1)
        : globalCounter.prop1++;
    } else if (request.url === "/prop2") {
      globalCounter = {};
    }
    response.statusCode = 201;
    response.end();
  } else if (request.method === "GET") {
    // YOUR CODE HERE
    let result = JSON.stringify(globalCounter.prop1);

    response.statusCode = 200;
    response.end(result);
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;
