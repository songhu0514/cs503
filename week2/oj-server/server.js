var express = require('express')
var app = express()
var restRouter = require("./routes/rest");
var mongoose = require("mongoose");

mongoose.connect("mongodb://user:user@ds129030.mlab.com:29030/coj-song");

app.use("/api/v1", restRouter);

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
