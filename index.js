var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.broadcast.on('playClicked', function(data){
    io.emit('playClicked', data);
  });
  socket.on('pauseClicked', function(data){
    io.emit('pauseClicked', data);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
