class Request {
    constructor (method, uri, version, message, response, fulfilled = false){
        [this.method, this.uri, this.version, this.message, this.response, this.fulfilled] = [method, uri.toString(), version, message, response, fulfilled];
    }
}

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
let myData2 = new Request('POST', 'http://bing.com', 'HTTP/1.1', 'hi');
console.log(myData2);