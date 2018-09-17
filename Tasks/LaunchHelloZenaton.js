var {Task} = require("zenaton");
var HelloZenaton = require("./HelloZenaton");
// var TaskA = require("./TaskA");

module.exports = Task("LaunchHelloZenaton", function(done) {
  console.log("LaunchHelloZenaton task starts");
  new HelloZenaton().execute();
//   new TaskA().execute();
  console.log("LaunchHelloZenaton task ends");
  done(null, "LaunchHelloZenaton");
});
