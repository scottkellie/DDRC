
var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , io2 = require('socket.io')
  , fs = require('fs')
  , five = require('johnny-five')
{
  board = new five.Board(),
app.listen(8888);


board.on("ready", function () {

    // Create a standard `led` hardware instance
    led12 = new five.Led(12);
	led11 = new five.Led(11);
function handler(req, res) {
    fs.readFile(__dirname + '/index.html',
  function (err, data) {
      if (err) {
          res.writeHead(500);
          return res.end('Error loading index.html');
          res.writeHead(200);
          res.end(data);
      }

	  io.sockets.on('connection', function (socket) {
	  led11 = new five.Led(11),
	led11.strobe(200);
	  socket.emit();
          socket.on(strobe());
              console.log(data);

   })
    // "strobe" the led in 100ms on-off phases
	var x="",i;
for (i=1;i<210;i++)
  {
  led12.strobe(x);
  led11.strobe(i);
  led12.off();
  led11.brightness(0);
  
  
    led12.strobe(100);
led12.off();
};
app.listen(8888);
}),
}),