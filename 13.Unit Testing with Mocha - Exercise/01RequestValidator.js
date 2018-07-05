function requestValidator(request){
    let errorMsg = 'Invalid request header: Invalid ';
    let method = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriRegex = /^[A-Za-z0-9.]+$/g;
    let messageRegex = /^[^<>\\&'"]*?$/g;
    let version = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if(!method.includes(request.method))
        throw new Error(errorMsg + "Method");
    
    if(request.uri === undefined || (!(uriRegex.test(request.uri)) && request.uri !== '*'))
        throw new Error(errorMsg + "URI");

    if(!version.includes(request.version))
        throw new Error(errorMsg + "Version");

    if(request.message === undefined || (!(messageRegex.test(request.message)) && request.message !== ''))
        throw new Error(errorMsg + "Message");

    return request;
}

let obj1 = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};
let obj2 = {
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
};
let obj3 = {
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
};

console.log(requestValidator(obj1));
