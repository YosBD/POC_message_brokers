import Transport from './transport';

export default class MemoryTransport extends Transport {
    constructor(log) {
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