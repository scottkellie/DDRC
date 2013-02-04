var app = require('http').createServer(), 
server = require('http').Server(), 
socket = require('socket.io'), 
http = require('http'), 
io = require('socket.io'), 
fs = require('fs'), 
five = require('johnny-five'), 
port = 8889;
var server = http.createServer(function (req, res) {
		res.writeHead(200, {
			'Content-Type' : 'text/html'
		});
		boardFive = new five.Board();
		boardFive.on("ready", function () {
			console.log('connecting');
			led = new five.Led(12);
			var i = 0;
			while (i < 5) {
				led.on();
				console.log("The number is " + i + "<br>");
					led.off();
					console.log("loop done" + "<br>");
					led.off();
					
					res.end('<h1>Hello Socket Lover!</h1>');
			server.listen(port);
			
			//server.listen(port);
			var socket = io.listen(server);
			
			socket.on('connection', function (client) {
				console.log('Connection to client established');
				client.on('message', function (event) {
					console.log('Received message from client!', event);
				});
				client.on('disconnect', function () {
					clearInterval(interval);
				});
				console.log('Server has disconnected');
console.log('Server running at http://127.0.0.1:' + port + '/');
});
}
});
});