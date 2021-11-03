const {setupInput} = require('./input')
const {connect} = require('./client')


// establishes a connection with the game server

console.log("Connecting ...");
connect();

setupInput();