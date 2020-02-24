var express = require("express");
var router = express.Router();
var models = require("./models");

/* GET users listing. */
router.get("/", function(req, res, next) {
  try {
    return res.json(models);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
