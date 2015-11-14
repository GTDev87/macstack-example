'use strict';
/**
 * Module dependencies.
 */

var macstack = require("macstack");

macstack(function (macstackApp) {
  macstackApp.addRoute("/", function (req, res, data){
    res.json({data: data});
  });
  macstackApp.run();
});