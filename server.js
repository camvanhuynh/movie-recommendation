var express = require('express');
var path = require('path');
var app = new express();
var http = require('http');
var bodyParser = require('body-parser');


app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());

app.listen(3009, function() {

	console.log('Started listening on port 3009.....!!!!! new')
})

var recommendation = {
  title : "People Places Things",
  date : "14/08/2015",
  duration: 85,
  genre : "Comedy",
  synopsis : "Will Henry is a newly single graphic novelist balancing parenting his young twin daughters and a classroom full of students while exploring and navigating the rich complexities of new love and letting go of the woman who left him."
};

app.get('/recommendation',function (req,res) {
	res.json(recommendation);
});

app.post('/recommendation', function (req, res) {
	recommendation = req.body;
	//recommendation = Object.assign({}, req.body);
	console.log('req.body.title is' + recommendation.title);
	res.status(200);
});
