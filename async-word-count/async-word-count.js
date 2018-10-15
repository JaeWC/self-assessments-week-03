var fs = require("fs");
var path = require("path");

var getWordCount = function(filePath, callback) {
  fs.readFile(filePath, "utf-8", function(err, data) {
    if (err) {
      callback(err, null);
      return;
    }

    var wordCount = data.trim().split(" ").length;
    callback(null, wordCount);
  });
};

var getTotalWordCount = function(filePathOne, filePathTwo, callback) {
  // YOUR CODE HERE
  getWordCount(filePathOne, function(err, fileOne) {
    if (err) {
      throw err;
    } else {
      getWordCount(filePathTwo, function(err, fileTwo) {
        if (err) {
          throw err;
        }
        callback(null, fileOne + fileTwo);
      });
    }
  });
};

module.exports = getTotalWordCount;
