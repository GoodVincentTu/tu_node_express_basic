var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

// Creat a route handler for the home path.
app.get('/', function(request, response){
	// response.send('Hello world!');

	// sent the jade file back and compiled
	response.render('index', {
		title: 'My Page'
	});
});


var port = process.env.port || 3000;
app.listen(port);
console.log('Server listening at port: ' + port);