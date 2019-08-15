var express = require("express");
/*
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");
*/
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
/*
app.use("/api/survey", apiRoutes);
app.use("/api", htmlRoutes);
*/
app.listen(PORT, function() {
console.log("App listening on PORT: " + PORT);
});

