<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io.connect('http://alfred');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('click', { my: 'data' });
  });
});
</script>
