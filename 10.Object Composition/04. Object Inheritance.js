function objectInheritance(arr) {
    let actions = (() => {
        let list = {};
        function create(name, isInherit, parentName) {
            isInherit ? list[name] = Object.create(list[parentName]) : list[name] = {};
        }

        function set(name, param, value){
            list[name][param] = value;
        }

        function print(name){
            let result = [];
            let obj = list[name];
            for (const param in obj)
                result.push(param+':'+obj[param]);

            console.log(result.join(', '));
        }

        return { create, set, print}
    })();

    arr.forEach(c => {
        [command, name, param, value] = c.split(/ /);
        actions[command](name, param, value);
    });
}


//actions.create('c1');
//actions.create('c2','c1');
//actions.set('c1', 'color', 'red');
//actions.set('c2', 'model', 'new');
//actions.print('c1');
//actions.print('c2');

objectInheritance(  ['create c1',
                    'create c2 inherit c1',
                    'set c1 color red',
                    'set c2 model new',
                    'print c1',
                    'print c2']);

objectInheritance(  ['create c3',
    'create c4 inherit c3',
    'set c3 color red',
    'set c4 model new',
    'print c1',
    'print c2',
    'print c3',
    'print c4']);

