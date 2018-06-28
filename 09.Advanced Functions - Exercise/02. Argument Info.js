function argumentInfo() {
    let argsCount = {};

    for (const arg of arguments) {
        let type = typeof arg;
        console.log(type + ': ' + arg);

        if (!argsCount[type])
            argsCount[type] = 0;

        argsCount[type]++;
    }

    let sortedArgs = Object.keys(argsCount).sort((a, b) => argsCount[b] - argsCount[a]);
    sortedArgs.forEach((e) =>
        console.log(e + ' = ' + argsCount[e]));
}

argumentInfo('cat', 42, function () {
    console.log('Hello world!');
});