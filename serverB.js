var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', __dirname + '/public');
app.engine('public', require('ejs').renderFile);
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

module.exports = app;


//--------{{start server}}---------------------------------------------
var debug = require('debug')('MyExpressServer:server');
var http = require('http');
var server = http.createServer(app);

var port = parseInt(process.env.PORT, 10) || 3031;
app.set('port', port);


server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

var colors = require('colors');
function onListening() {
  console.log(('Listening on port ' + server.address().port).green.bgWhite);
  debug('Listening on port ' + server.address().port);
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error('Port ' + port + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error('Port ' + port + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
