const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const todosRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
  res.sendFile('index.html');
});

app.use('/api/todos', todosRoutes);

app.listen(port, function(){
  console.log('Serving app on ' + port); 
});