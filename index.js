// var client  = mqtt.connect({ host:'test.mosquitto.org', port: 8081})
// or
var client = mqtt.connect('wss://test.mosquitto.org:8081/mqtt');

// var client  = mqtt.connect({ host:'mqtt.eclipse.org/mqtt', port: 443})
// or
// var client  = mqtt.connect('wss://mqtt.eclipse.org:443/mqtt')

client.on('connect', function () {});




$(document).ready(function () {

  client.on('message', function (topic, message) {
    $('#message').prepend('<tr><td>'+topic+'</td><td>'+message+'</td></tr>');
  })

  // The publisher side;
  $('#publish').on('click',function(){
    let topic = $('#topic').val();
    let payload = $('#payload').val();
    client.publish(topic,payload);
  });

  // The subscriber side;
  $('#subscribe').on('click',function(){
    let topic = $('#subTopic').val();
    client.subscribe(topic,function(err){
      if(err){
        console.log('Error subscribing the topic')
      }
    });
  });

});//end of document ready function