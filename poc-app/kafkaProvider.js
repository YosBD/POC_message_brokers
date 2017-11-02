function publish(){ console.log('kafka publish')}
function request(){ console.log('kafka request')}
function subscribe(){ console.log('kafka subscribe')}

module.exports = {
    publish: publish,
    request: request,
    subscribe: subscribe
};