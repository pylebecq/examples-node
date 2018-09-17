require("./client");

var AsynchronousWorkflow = require("./Workflows/HelloZenaton");

new AsynchronousWorkflow().dispatch();
