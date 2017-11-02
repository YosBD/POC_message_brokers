function publish(){ console.log('in-memory publish')}
function request(){ console.log('in-memory request')}
function subscribe(){ console.log('in-memory subscribe')}

module.exports = {
    publish: publish,
    request: request,
    subscribe: subscribe
};