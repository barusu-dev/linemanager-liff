require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var myLiffId = '';

app.use(express.static('public'));

app.get('/l/:liffId', function (req, res) {
	myLiffId = req.params.liffId
	res.sendFile(`${__dirname}/public/index.html`);
})

app.get('/test', function (req, res) {
	res.sendFile(`${__dirname}/public/test.html`);
})

app.get('/js/:filename', function (req, res) {
	fs.readFile(`${__dirname}/public/js/` + req.params.filename ,function(err,data){
		res.writeHead(200,{"Content-Type":"text/javascript"});
		res.end(data,'utf-8');
	});
})

app.get('/css/:filename', function (req, res) {
	fs.readFile(`${__dirname}/public/css/` + req.params.filename ,function(err,data){
		res.writeHead(200,{"Content-Type":"text/javascript"});
		res.end(data,'utf-8');
	});
})

app.get('/send-id', function(req, res) {
	res.json({id: myLiffId});
});

app.listen(port, () => console.log(`app listening on port ${port}!`));