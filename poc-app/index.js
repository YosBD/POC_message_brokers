const inMemoryProvider = require('./inMemoryProvider');
const kafkaProvider = require('./kafkaProvider');
const rabbitmqProvider = require('./rabbitmqProvider');
const natsProvider = require('./natsProvider');

function getProvider(providerName) {
    switch (providerName) {
        case 'rabbit':
            return rabbitmqProvider;
            break;
        case 'kafka':
            return kafkaProvider;
            break;
        case 'nats':
            return natsProvider;
            break;
        case 'inMemory':
            return inMemoryProvider;
        default:
            printHelp();
            break;
    }
}

function callFunction(functionName, provider) {
    if (!provider) return;

    switch (functionName) {
        case 'publish':
            provider.publish();
            break;
        case 'request':
            provider.request();
            break;
        case 'subscribe':
            provider.subscribe();
            break;
        default:
            printHelp();
            break;
    }
}
function printHelp(){
    console.error(`invalid parameters ${JSON.stringify(process.argv)}`);
}

function run() {
    console.log('publisher is running');

    const functionName = process.argv[2];
    const providerName = process.argv[3];

    const provider = getProvider(providerName);
    callFunction(functionName, provider);

    console.log("publisher finished");
}

run();