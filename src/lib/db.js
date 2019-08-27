var mongoose = require('mongoose');

//Host server database MongoDB and name database
const mlabURI = 'mongodb://192.168.69.210:27017/RTLS'
const dbName = 'RTLS';

const con = mongoose.connect(mlabURI, (error) => {
	if(error){
		console.log("Error " + error);
	}else{
		console.log("Connected successfully to server")
	}
});

module.exports = con;