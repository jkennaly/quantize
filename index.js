const express = require('express');
const path = require('path');

const sslRedirect = require('heroku-ssl-redirect')
const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
} else {
app.use(sslRedirect())
  
}
const port = process.env.PORT || 8080;
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname + '/sts-client-19/dist'));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'sts-client-19/dist/index.html'));
});

app.listen(port);