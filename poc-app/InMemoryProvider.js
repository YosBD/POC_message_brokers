function publish(args){ console.log(`in-memory publish. args: ${JSON.stringify(args)}`)}
function request(){ console.log('in-memory request')}
function subscribe(){ console.log('in-memory subscribe')}

module.exports = {
    publish: publish,
    request: request,
    subscribe: subscribe
};