
/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.locals.pretty = true;
  app.set('port', process.env.PORT || 8080);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon( __dirname + '/public/favicon.ico', { maxAge: 2592000000 } ));
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});


app.configure('development', function(){
  app.use(express.errorHandler());
});

app.post('/vcard',       routes.vcard);
app.get('/vcard',        routes.form_vcard);

app.post('/simple',      routes.simple);
app.get('/simple',       routes.form_simple);

app.get('/pairing/:id?', routes.pairing);
app.get('/small',        routes.small);
app.get('/',             routes.index);


var server = http.createServer(app);
server.listen( app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
})

var socket = require( process.cwd() + "/lib/Socket.js" );
    socket.init( server );

