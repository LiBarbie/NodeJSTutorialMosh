var url = 'http://mylogger.io/log';
const EventEmitter = require('events');

class Logger extends EventEmitter{
    //Function inside a class ->Method
    log(message){
        //Send an HTTP Request
        console.log(message);
    
        //Raise an event
        this.emit('messageLogged',{id : 1, url : 'http://'});
    }//log
}//Logger

module.exports = Logger;

