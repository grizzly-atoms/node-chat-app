let socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Ike',
    text: 'Yo'
  });
})

socket.on('disconnect', function () {
  console.log('Disconnected from server');
})

socket.on('newMessage', function(email) {
  console.log('New message', email);
});