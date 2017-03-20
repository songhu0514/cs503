module.exports = function(io) {
  io.on('connection', (socket) => {
    console.log(socket);

    var message = socket.handshake.query['message'];
    console.log(message);

    io.to(socket.id).emit('message', 'hehe from server');
  });
}
