function publish(){ console.log('rabbit publish')}
function request(){ console.log('rabbit request')}
function subscribe(){ console.log('rabbit subscribe')}

module.exports = {
    publish: publish,
    request: request,
    subscribe: subscribe
};