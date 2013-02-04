var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')
 , five = require("johnny-five");
board, led;
app.listen(8888);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
}  
function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
console.log('connect');
function fiveflash(){
board = new five.Board();

board.on("ready", function() {

  // Create a standard `led` hardware instance
  led = new five.Led(13);

  // "strobe" the led in 100ms on-off phases
  led.strobe( 100 );

    res.end(data);
}
