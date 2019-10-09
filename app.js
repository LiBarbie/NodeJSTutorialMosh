const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Ttal Memory : '+totalMemory+'\nFree Memory : '+freeMemory+'\nUsed Memory : '+(totalMemory-freeMemory));
