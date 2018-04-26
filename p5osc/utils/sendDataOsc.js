// initialisation des modules
const osc = require('node-osc');

// nouvelle instance osc avec l'ip de la machine hote
const client = new osc.Client('127.0.1.1', 8000);

// fonction pour gérer l'envoi des données par udp osc
let sendDataOsc = function (address, data2send) {
  // on envoie les données avec send
  client.send(`${address}`, data2send, function() {
    console.log(`send data : ${data2send} to address : ${address}`);
  });
}

// export du module pour app.js
module.exports = {
  sendDataOsc
}
