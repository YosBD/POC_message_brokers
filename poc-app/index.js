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
        case 'memory':
            return inMemoryProvider;
        default:
            return undefined;
    }
}

function getFunction(functionName, provider) {
    if (!provider) return;

    switch (functionName) {
        case 'pub':
            return provider.publish;
        case 'req':
            return provider.request;
        case 'sub':
            return provider.subscribe;
        default:
            return undefined;
    }
}

function getArgv(){
    return require('yargs')
        .option('function', {
            alias: 'f',
            choices: ['pub', 'req', 'sub'],
            describe: 'function to execute'
        })
        .option('provider', {
            alias: 'p',
            choices: ['rabbit', 'kafka', 'nats', 'memory'],
            describe: 'provider to use'
        })
        .option('topic', {
            alias: 't',
            describe: 'topic to publish/subscribe to'
        })
        .option('brokerhost', {
            alias: 'bh',
            default: 'localhost',
            describe: 'topic to publish/subscribe to'
        })
        .option('brokerport', {
            alias: 'bp',
            default: '123',
            describe: 'topic to publish/subscribe to'
        })
        .demandOption(['function', 'provider','topic'])
        .help()
        .argv;
}
function run() {
    const argv = getArgv();
    const provider = getProvider(argv.provider);
    const func = getFunction(argv.function, provider);
    func(argv.topic, argv._);
}

run();