class Request {
    constructor (method, uri, version, message) {
        this.method = method;
        this.uri
    }
}
let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);