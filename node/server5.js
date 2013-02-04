// Require HTTP module (to start server) and Socket.IO
var app = require('http').createServer(handler)
,server = require('http').Server()
,socket = require('socket.io')
,http = require('http')
,io = require('socket.io')
,fs = require('fs')
,five = require('firmata')
,i = 1
,val1 = 100
,val2 = 100
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
	);
	}
// Start the server at port 8889
var server = http.createServer(function(req, res){
    // Send HTML headers and message
    res.writeHead(200,{ 'Content-Type': 'text/html' }); 
	if(i<2){
	board = new five.Board('ttyUSB0',function(){
	//ready
	console.log('Firmata connected');
	
	//board.on("ready", function() {
	//console.log('connecting');

  // Create a standard `led` hardware instance
  

  // "strobe" the led in 100ms on-off phases
 
  board.pinMode(12,PWM);
  board.pinMode(11,PWM);
  var i=0;
  while (i<10)
  {
   board.digitalWrite(12,val1+i);
  console.log("The number is " + val1 + "<br>");
  i++;
  } 
 board.digitalWrite(11,val2+i);
  res.end('<h1>Hello Socket Lover!</h1>' + '<h1>Hello again</h1>');
});
server.listen(port);


console.log('Server running at http://127.0.0.1:' + port + '/');

// Create a Socket.IO instance, passing it our server
//var socket = io.connect();
var socket = io.listen(server);

// Add a connect listener
socket.on('connection', function (client) {
    led11.strobe(50);
    console.log('Connection to client established');
	res.writeHead(200,{ 'Content-Type': 'text/html' }); 
	res.end('<h1>Server Socket active</h1>');
});
    // Success!  Now listen to messages to be received
    client.on('message', function (event) {
        led12.strobe(50);
        console.log('Received message from client!', event);
    });

    client.on('disconnect', function () {
        clearInterval(interval);
        led11.strobe(1000);
        console.log('Server has disconnected');
    });
    function click() {
        Console.log("click!!");
		}
        //led11.toggle();
        //led12.toggle();
    };
	});