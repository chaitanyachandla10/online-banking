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

//signup 
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


//home 
myapp.get('/home',function(req,res)
{
	console.log('>>> data received from front' , req.query);
	
MongoClient.connect(url , function(err,db){

if(err)
	{
	console.log(err);
	}
	console.log('connected')

	db.collection('user').findOne({email:req.query.email} , function(err,data){
	if(err)
	{
		return res.send('Error');
	}
	if(data)
	{
		res.send(data);
	}
console.log(">>>>>> data" , data);
})
})
});

//login
myapp.get('/login',function(req,res)
	{
	console.log('>>> data received from front' , req.query);
	MongoClient.connect(url , function(err,db){
	if(err)
	{
		console.log(err);
	}
	console.log('connected')
	db.collection('user').findOne({email:req.query.email} , function(err,data){
	if(err)
	{
	return res.send('Error');
}

if(data)
{
if(data.password==req.query.password){

	res.send(data);
}
else{
	res.send('password incorrect')
}
}
console.log(">>>>>> data" , data);
})
})
});

//Transfer Money
myapp.get('/TransferMoney',function(req,res)
	{	
		console.log('>>> data received from front' , req.query);
		MongoClient.connect(url , function(err,db)
	{
		db.collection('user').findOne({Bankcc:req.query.accountno},function(err,data)
	{
		if(err)
	{
		return res.send('Error');
	}

		if(data)
	{


		console.log('connected')
			db.collection('user').updateOne({"Bankcc": "req.query.accountno"},{$set:{"AccountBala":"req.query.amount"}});
	}
		else
	{
		res.send('Account no is not correct')
	}

		console.log(">>>>>> data" , data);
})
})
});

myapp.listen(5100,function()
{
	console.log('server is running');
});