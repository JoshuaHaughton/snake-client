const {MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, IP, PORT} = require('./constants')
let net = require('net')

let conn = net.createConnection({
  host: IP,
  port: PORT
});;

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  //checks if ctrl + c is pressed and terminates session
  if(data === '\u0003') {
    process.exit();
  }
  //movement
  if (data === MOVE_UP_KEY) {
    conn.write('Move: up')
  }
  if (data === MOVE_LEFT_KEY) {
    conn.write('Move: left')
  }
  if (data === MOVE_DOWN_KEY) {
    conn.write('Move: down')
  }
  if (data === MOVE_RIGHT_KEY) {
    conn.write('Move: right')
  }


  //chat macros
  if (data === '8') {
    conn.write('Say: WOOF WOOF')
  }
  if (data === '7') {
    conn.write('Say: Do i smell chicken??? 👀')
  }
  if (data === '9') {
    conn.write("Say: IT'S ABOUT PRIDE")
  }
  if (data === '0') {
    conn.write("Say: ITS ABOUT POWER")
  }
  if (data === 'h') {
    conn.write('Say: WE STAY HUNGRY')
  }
  if (data === 'j') {
    conn.write('Say: WE DEVOUR')
  }
  if (data === 'p') {
    conn.write('Say: time 2 poop')
  }
  if (data === 'l') {
    conn.write('Say: Hola!!!!')
  }
  
};



module.exports = {setupInput}