var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var name = req.query.name; 
	var description = req.query.description; 
	 
	var newFriend = new Object();
	newFriend.name = req.query.name;
	newFriend.description = req.query.description;
	newFriend.imageURL = "http://lorempixel.com/400/400/people/";
	data.friends.push(newFriend);
	res.render('index', data);

 }