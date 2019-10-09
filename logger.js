
var url = 'http://mylogger.io/log';

function log(message){
    //Send an HTTP Request
    console.log(message);
}//log

//Exporting an object
module.exports.log = log;

//Exporting only a function
module.exports = log;

//module.exports.endPoint = url;