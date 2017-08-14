const express = require('express');
const path = require('path');
const app = express();
const http = require('http');

app.use(express.static(path.join(__dirname,'public')));

app.listen(3009, function() {

	console.log('Started listening on port 3009.....')
})

var recommendation = {
  title : "Gone with the wind",
  year : 1951,
  duration: 180,
  genre : "novel movie",
  synopsis : "Scarlette Ohara and Rheth Buller"
};

app.get('/recommendation',function (req,res) {
	res.json(recommendation);
});

app.post('/recommendation', function (req, res) {
	recommendation = req.body;
	res.status(200);
});
