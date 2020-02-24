var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");

var indexRouter = require("./app/main/routes");
var authRouter = require("./app/auth/routes");

var api = express();

// view engine setup
api.set("views", path.join(__dirname, "views"));
api.set("view engine", "pug");
api.set("etag", false);

api.use(logger("dev"));
api.use(express.json());
api.use(express.urlencoded({ extended: false }));
api.use(cookieParser());
api.use(bodyParser.json()); // support json encoded bodies
api.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
api.use(express.static(path.join(__dirname, "public")));

api.use("/rest/api/v1", indexRouter);
api.use("/rest/api/v1/auth", authRouter);

// catch 404 and forward to error handler
api.use(function(req, res, next) {
  next(createError(404));
});

// error handler
api.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = err;

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = api;
