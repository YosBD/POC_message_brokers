function publish(){ console.log('nats publish')}
function request(){ console.log('nats request')}
function subscribe(){ console.log('nats subscribe')}

module.exports = {
    publish: publish,
    request: request,
    subscribe: subscribe
};