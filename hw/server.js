var express = require('express');

var app = express();
var server = app.listen(3000);

function listen() {
    var host = server.address().address;
    var port = server.address().port;
  }
  
app.use(express.static('public'));

console.log("My socket server is running");

var socket = require('socket.io'); 

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
    console.log('new connection: ' + socket.id);

    socket.on('mouse', mouseMsg);

    function mouseMsg(data){
        socket.broadcast.emit('mouse', data);
        console.log(data);
    }
}

var io = require('socket.io')(server);

io.sockets.on('connection',
  function (socket) {
  
    console.log("We have a new client: " + socket.id);
  
    socket.on('mouse',
      function(data) {
        console.log("Received: 'mouse' " + data.x + " " + data.y);
      
        socket.broadcast.emit('mouse', data);
        

      }
    );
    
    socket.on('disconnect', function() {
      console.log("Client has disconnected");
    });
  }
);