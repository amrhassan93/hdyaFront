// app.use(express.static('./dist/HdyaFront'));

// app.get('*', function(req, res) {
//     res.sendFile('index.html', { root: 'dist/HdyaFront/' });
// });

// app.listen(process.env.PORT || 8080);


const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/hdya-front'));

app.get('/*', function(req, res) {

    res.sendFile(path.join(__dirname + '/dist/hdya-front/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);