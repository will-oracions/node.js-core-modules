const fs = require('fs');
const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
  log (message) {

    const payload = { 
	    id: uuid.v4(), 
	    message
    };

    this.emit(
	    'message', 
  	    payload	 
    );
    
    fs.appendFile('_log.txt', 
	    '\n {id: ' + payload.id + ', message: ' + payload.message + '}',
	    err => {
	     if (err) throw err
         }
    );

  }
}

module.exports = Logger;
