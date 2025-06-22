const express =require('express');
const app =express();
const bodyParser =require('body-parser');
const cors =require('cors');
const db =require('./dbConnection');
const User= require('../Backend/Model/UserModal');

app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello Mr.Chandan , I am live.');
});

// app.post('/',function(req, res){
//   console.log(req.body)
//   res.send({name:"Chandan"})
// })

  app.listen(3000);
  console.log('Server is running on port 3000');
