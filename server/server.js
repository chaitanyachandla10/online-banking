var express = require('express');
var myapp = express();
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/onlinebank';
console.log("path",__dirname);
myapp.use(express.static(__dirname+'./../client/view'))
myapp.use(express.static(__dirname + './../client'));
myapp.get('/',function(req,res)
{
	res.render('index.html');

});
myapp.post('/signup',function(req,res)
{

MongoClient.connect(url , function(err,db){

if(err){
	console.log(err);
}
console.log('connected')

db.collection('user').insertOne(req.query , function(err,data){
if(err){
	return res.send('Error');
}
res.send('created');


})

})

});
myapp.get('/login',function(req,res)
{
	if(data.password == req.query.password && data.uname == req.uname)
	{

	res.send(data);
	}
	else
	{
		res.send('password incorrect')

	}
console.log(">>>>>> data" , data);

});
myapp.listen(5100,function()
{
	console.log('server is running');
})