var { Workflow } = require("zenaton");

var Task = require("../Tasks/LaunchHelloZenaton");

module.exports = Workflow("HelloZenaton", function() {
  console.log('HelloZenaton workflow starts');
  new Task().execute();
  console.log('HelloZenaton workflow ends');
});
