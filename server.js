var express = require('express');
var morgan = require('morgan');
var marked = require('marked');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', 'jade');


//routes
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
