
export default class Transport {
    constructor(log) {
        this.supportedFeatures = {
            publish: false,
            subscribe: false,
            subscribeGroup: false,
            request: false,
            requestHandle: false,
        };
        this.log = log;
    }

    publish(topic, payload) {
        throw new Error ("Publish was called but was not implemented!");
    }

    subscribe(topic, handler) {
        throw new Error ("Subscribe was called but was not implemented!");
    }

    subscribeLoadBalanced(topic, handler, groupId) {
        throw new Error ("subscribeGroup was called but was not implemented!");
    }

    request(resourceKey, payload, timeout) {
        throw new Error ("Request was called but was not implemented!");
    }

    setRequestHandler(resourceKey, handler) {
        throw new Error ("SetRequestHandler was called but was not implemented!");
    }
}
