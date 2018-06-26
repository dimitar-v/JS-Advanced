function commandPeocessor(commands) {
    let processor = (function () {
        let result = '';
        return function processor(arr) {
            for (const a of arr) {
                [command, val] = a.split(' ');
                switch (command) {
                    case 'append':
                        result += val;
                        break;
                    case 'removeStart':
                        result = result.slice(+val);
                        break;
                    case 'removeEnd':
                        result = result.slice(0, -(+val));
                        break;
                    case 'print':
                        console.log(result);
                        break;
                }
            }
        }
    })();
    processor(commands);
}

commandPeocessor(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);
console.log();
commandPeocessor(['append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print']);