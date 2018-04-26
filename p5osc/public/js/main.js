var socket = io();

socket.on('ip', function(message) {
    var ip = message.localIp + ":" + message.port;
    var div = $("#infos").html(ip);
});

socket.on('commandeBack', function(message) {
  console.log(message.obj.user)
  $('#commandeback').html('commande from ' + message.obj.user +' :' + message.obj.commande.text)
})

$('#message-form').on('submit', function(e) {
  e.preventDefault();

  var commande = $('[name=commande');
  // console.log(commande.val())

  socket.emit('commande', {
    from: 'client',
    text: commande.val()
  }, function() {
    commande.val('');
  })
});
