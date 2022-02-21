// module.exports.message = 'Hello world';
function doSomething(){
    return 'Something is being done'
}
// makes this public and accessible from other modules

module.exports = {
    message: 'Hello World',
    message2: 'Goodbye world',
    doSomething
}