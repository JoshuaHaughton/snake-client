const {setupInput} = require('./input')
const {connect} = require('./client')
const net = require("net");

// establishes a connection with the game server


console.log("Connecting ...");
connect();

let conn = connect();
//pass the object returned from connect into setupInput
setupInput(conn);
