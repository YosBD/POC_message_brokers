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
        .demandOption(['function', 'provider'], 'Please provide both function and provider arguments to work with this tool')
        .help()
        .argv;
}
function run() {
    const argv = getArgv();
    const provider = getProvider(argv.provider);
    const func = getFunction(argv.function, provider);
    func(argv._);
}

run();