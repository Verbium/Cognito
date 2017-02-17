var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var xmlparser = require('express-xml-bodyparser');

var routes = require('./routes/index');
var users = require('./routes/users');
/*var posts = require('./routes/posts');*/

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
/*app.use(xmlparser());*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

function anyBodyParser(req, res, next) {
    var data = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk) {
        data += chunk;
    });
    req.on('end', function() {
        req.rawBody = data;
        next();
    });
}

app.use(anyBodyParser);

/*// parameter middleware that will run before the next routes
app.param('shipmentId', function(req, res, next, shipmentId) {
    req.shipmentId = shipmentId;
    next();
});*/

app.post('wuk/cs/CognitoTab/v1/Shipments/', function(req, res) {
    //CognitoTab/v1/Shipments?deviceID={deviceid}&rel=oldest_unactioned
    console.log('Receiving xml content');
    console.log(req.rawBody.toString());
    res.contentType('application/xml');
    res.send(req.body, 200);
});

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  res.send('POST request to the homepage');
});

app.use('/', routes);
app.use('/users', users);

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

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});




module.exports = app;
