var path = require('path');

//ROUTING

module.exports = function (app) {

  //HOME Page route
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/views/homePage.html"));
  })
  //Quiz1 route
  app.get("/quiz1", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/views/quiz1.html"));
  })
  //If no matching route is found send user to home page
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/views/homePage.html"));
  })
}