// initialisation des modules
const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const ip = require('ip');

// initialisation des modules persos
const { sendDataOsc } = require('./utils/sendDataOsc');
// const { runProcessing } = require('./utils/runProcessing');

// initialisation du serveur http + websocket
const localIp = ip.address();
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// paramétrage du serveur avec express
const publicPath = path.join(__dirname, './public');
app.use(express.static(publicPath));
// route home
app.get('/', (req, res) => {res.sendFile(path.join(__dirname + '/index.html'));});

// lancement de Processing
// runProcessing()

// connection websocket client serveur
io.on('connection', (socket) => {
    console.log('new client >'+ socket.id);
    io.emit('ip', { localIp, port:8000});

    // on reçoit les données depuis le client, on les envoie vers processing avec osc
    // socket.on('slider', (data) => {
    //     if (data === undefined) {
    //         return data === 0;
    //     } else {
    //         console.log(`received data from ${socket.id} : ${data}`);
    //         sendDataOsc(`/datafrom-${socket.id}`, data);
    //     }
    //
    // });

    socket.on('commande', (commande) =>  {
        var obj = {
          commande,
          user: socket.id
        }
        io.emit('commandeBack', { obj });
        console.log(commande.text);
        sendDataOsc(`/datafrom-${socket.id}`, commande.text);
    });
});

// lancement du serveur
server.listen(port, () => {
    console.log(`server running on ${localIp}:${port}`);
});
