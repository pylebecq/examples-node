var {Task} = require("zenaton");

module.exports = Task("HelloZenaton", function(done) {
  console.log("HelloZenaton task starts");
  console.log("HelloZenaton task ends")
  done(null, "HelloZenaton");
});
