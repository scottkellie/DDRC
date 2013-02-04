// Require HTTP module (to start server) and Socket.IO
var app = require('http'),server = require('http').Server(),socket = require('socket.io'),http = require('http'),io = require('socket.io'),fs = require('fs'),five = require('johnny-five'),port = 8889;
var server = http.createServer(function(req, res){
    // Send HTML headers and message
    res.writeHead(200,{ 'Content-Type': 'text/html' }); 
	boardFive = new five.Board;
	boardFive.on("ready", function() {
	console.log('connecting');

  // Create a standard `led` hardware instance
  led = new five.Led(12);

  // "strobe" the led in 100ms on-off phases
  var i=0;
  while (i<5)
  {
   led.on();
  console.log("The number is " + i + "<br>");
  i++;
  this.wait( 3000,function(){
  led.off();
  console.log("loop done" + "<br>");
led.off();
  res.end('<h1>Hello Socket Lover!</h1>',<p>
    <input id="Button1" type="button" value="click" /></p>)
});

server.listen(port);

// Create a Socket.IO instance, passing it our server
//var socket = io.connect();
var socket = io.listen('http://alfred');
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
console.log('Server running at http://127.0.0.1:' + port + '/');