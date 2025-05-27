// variables stuff

const express = require('express');
const app = express();
const helmet = require('helmet');
const ninetyDaysInSeconds = 90*24*60*60;
let timeInSeconds = ninetyDaysInSeconds;

// app stuff

app.use(helmet({
  frameguard: {
    action: 'deny'
  },
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'",'trusted-cdn.com'],
    }
  },
  dnsPrefetchControl: false,
  hsts: {force: true},
  noCache: true,
}))




















































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Info Sec App Started on port ${PORT}');
});
