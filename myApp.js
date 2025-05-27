const express = require('express');
const helmet = require('helmet');
const app = express();
const ninetyDaysInSeconds = 90*24*60*60;
let timeInSeconds = ninetyDaysInSeconds;

app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({action: 'deny'}));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(helmet.hsts({maxAge: timeInSeconds, force: true}));


















































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
