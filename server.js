'use strict';
/**
 * Module dependencies.
 */
var macstack = require("macstack")();

macstack.addRoute("/", function (req, res){
  res.json({data: "data"});
});

macstack.run();