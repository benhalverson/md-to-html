'use strict';
var app = require('express');
var bodyParser = require('bodyParser');
var morgan = require('morgan');
var marked = require('marked');
var port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));

app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index');
});

app.post('/mdtohtml', function(req, res){
  var md = req.body.toString();
  var html = marked(md);
  res.send(html);
})

app.listen(port);
console.log('listening on port', port);
