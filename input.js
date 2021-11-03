let connection;

const handleUserInput = function () {
  //checks if ctrl + c is pressed and terminates session
  if (key === '\u0003') {
    process.exit();
  }
  //movement
  if (key === 'w') {
    conn.write('Move: up')
  }
  if (key === 'a') {
    conn.write('Move: left')
  }
  if (key === 's') {
    conn.write('Move: down')
  }
  if (key === 'd') {
    conn.write('Move: right')
  }


  //chat macros
  if (key === '1') {
    conn.write('Say: WOOF WOOF')
  }
  if (key === '2') {
    conn.write('Say: Do i smell chicken??? 👀')
  }
  if (key === '3') {
    conn.write("Say: IT'S ABOUT PRIDE")
  }
  if (key === '4') {
    conn.write("Say: ITS ABOUT POWER")
  }
  if (key === '5') {
    conn.write('Say: WE STAY HUNGRY')
  }
  if (key === '6') {
    conn.write('Say: WE DEVOUR')
  }
  if (key === '7') {
    conn.write('Say: time 2 poop')
  }
  if (key === '8') {
    conn.write('Say: Hola!!!!')
  }
  
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput}