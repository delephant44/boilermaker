const path = require("path");
const express = require("express");
const app = express();

//static middleware
app.use(express.static(path.join(__dirname, '../public')))

//other middleware should go here

//for below also refer to webpack.config.js
// Your entry file might be something simple like an index.js, app/main.js, client/app.js or browser/index.js.
// Your output file will be created by webpack. You don't need to actually create it yet - just decide where you want it to live. This could be in the root of your app, or a public folder - it's up to you.

app.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });