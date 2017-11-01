const publish = require('./publish');
const request = require('./request');
const subscribe = require('./subscribe');

function printHelp(){
    console.error(`invalid parameter ${firstArg}`);
}

console.log('publisher is running');

const firstArg = process.argv[2];

switch (firstArg) {
    case 'publish':
        publish();
        break;
    case 'request':
        request();
        break;
    case 'subscribe':
        subscribe();
        break;
    default:
        printHelp();
}

console.log("publisher finished");