const Logger = require('./Logger');

const logger = new Logger();

logger.on('message', (data) => {
  console.log('[getting]', data);
});

logger.log('Salut');
logger.log('les');
logger.log('gens');
