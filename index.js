const express = require('express');
const app = express();
// const bodyParser = require('body-parser')

var json = {};

app.get('/api/todos', function(req, res){
  res.json([]);
});
app.post('/api/todos', function(req, res){
  // const todo = models.Todo.build({
  //   todo: req.body.todo
  // });
  res.json([]);
});
app.put('/api/todos/:id', function(req, res){
  // todo.update({
  //   todo: req.body.todo
  // }, {
  //   where: {
  //     id: req.params.id
  //   }
  // }) .then(function(){
    res.json([]);
  // })
});
app.patch('api/todos/:id', function(req, res){
  res.json([]);
});
app.delete('/api/todos/:id', function(req, res){
  res.json([]);
});

app.listen(3000, function(){
  console.log('Hey, Listen!');
});
