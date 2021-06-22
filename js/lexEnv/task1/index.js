const createLogger = () => {
  // lex env: {
    // warn,
    // error,
    // log,
    // getRecords,
    // messages
  // }



  const messages = [];

  // input string
  // out undefined
  function warn(stringWarn) {
    messages.push({ message: stringWarn, dateTime: new Date(), type: 'warn' });
  }

  function error(stringError) {
    messages.push({
      message: stringError,
      dateTime: new Date(),
      type: 'error',
    });
  }

  function log(stringLog) {
    messages.push({
      message: stringLog,
      dateTime: new Date(),
      type: 'log',
    });
  }

  // input: string
  // out: array
  function getRecords(text) {
    return ( text 
      ? messages.filter(message => message.type === text) : [...messages])
      .sort((a, b) => b.dateTime - a.dateTime);
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
};

//test data
const logger1 = createLogger();
console.log(logger1);
logger1.error('saas');
logger1.error('hello');
logger1.log('some log');

console.log(logger1.getRecords('error'));
console.log(logger1.getRecords('sdfsdf'));
