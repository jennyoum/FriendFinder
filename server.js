var express = require("express");
var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/survey", apiRoutes);
app.use("/api", htmlRoutes);
app.listen(PORT, function() {
console.log("App listening on PORT: " + PORT);
});