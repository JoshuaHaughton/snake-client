// Client <------------
// Chat app, where you can talk to me not using zoom, or slack 
// but YOUR OWN TERMINAL

const net = require('net');
const stdin = process.stdin;
                                            //127.0.0.1
const name = 'Buju Banton';
const client = net.createConnection({host: '135.23.223.133', port: 3001});
stdin.setEncoding('utf8');
client.setEncoding('utf8');

client.write(`${name} has connected!!!`);

client.on('data', (data) => {
    console.log(data);
})

stdin.on('data', (input) => {
    client.write(`${name}: ${input}`);
})