const EventEmitter = require('events');

const emitter = new EventEmitter();

//register a listener
emitter.on('messageLogged',function(arg){
    console.log('Listener called', arg);
});

const Logger = require('./logger');
const logger = new Logger();
logger.log('message');