// Require HTTP module (to start server) and Socket.IO
var app = require('http').createServer(handler)
,server = require('http').Server()
,socket = require('socket.io')
,http = require('http')
,io = require('socket.io')
,fs = require('fs')
,five = require('johnny-five')
,i = 1
,port = 8889;

app.listen(8888);
function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
	}
	)};
// Start the server at port 8889
var server = http.createServer(function(req, res){
    // Send HTML headers and message
    res.writeHead(200,{ 'Content-Type': 'text/html' }); 
	if(i<2){
	boardFive = new five.Board;
	}
	i++;
	boardFive.on("ready", function() {
	console.log('connecting');

  // Create a standard `led` hardware instance
  led12 =  five.Led(12);
  led11 =  five.Led(11);

  // "strobe" the led in 100ms on-off phases
  var i=0;
  while (i<5)
  {
   led12.strobe(100);
  console.log("The number is " + i + "<br>");
  i++;
  } 
 led11.strobe(1000);
  res.end('<h1>Hello Socket Lover!</h1>');

});
});
server.listen(port);

// Create a Socket.IO instance, passing it our server
//var socket = io.connect();
var socket = io.listen(server);

// Add a connect listener
socket.on('connection', function(client){ 
    console.log('Connection to client established');

    // Success!  Now listen to messages to be received
    client.on('message',function(event){ 
        console.log('Received message from client!',event);
    });

    client.on('disconnect',function(){
        clearInterval(interval);
        console.log('Server has disconnected');
    });
});

console.log('Server running at http://127.0.0.1:' + port + '/');