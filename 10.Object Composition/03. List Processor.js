function processCommands(arr) {
    let processor =(function () {
        result  = [];
        function add(str) {
            result.push(str);
        }

        function remove(str) {
            result = result.filter(s => s !== str);
        }

        function print() {
            console.log(result.toString());
        }

        return {add, remove, print};
    })();

    arr.forEach(a => {
        [command, str] = a.split(' ');
        processor[command](str);
    });
}

// version 2
function runCommands(arrCommands) {
    let processor =(function () {
        let list  = [];
        return {
            add: (str) => list.push(str),
            remove: (str) => list = list.filter(s => s !== str),
            print: () => console.log(list.toString())
        }
    })();

    for (const strCommand of arrCommands) {
        [command, str] = strCommand.split(/ /);
        processor[command](str);
    }
}

processCommands(['add hello', 'add again', 'remove hello', 'add again', 'print']);
console.log();
runCommands(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print'])
