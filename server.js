const express = require('express');
const path = require('path');
const app = express();
const http = require('http');

app.use(express.static(path.join(__dirname,'public')));


app.listen(3009, function() {

	console.log('started listening on port 3009!!')
})
