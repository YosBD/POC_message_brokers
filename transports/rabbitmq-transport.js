import Transport from './transport';

export default class RabbitMQTransport extends Transport {
    constructor(log, host, port) {
        super(log);
        this.supportedFeatures = {
            publish: true,
            subscribe: true,
            subscribeGroup: false,
            request: true,
            requestHandle: true,
        };
        this.log = log;
    }
}