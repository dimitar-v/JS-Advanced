(function strExtension() {
    String.prototype.ensureStart = function (str) {return this.indexOf(str)!== 0 ? str + this : '' + this};
    String.prototype.ensureEnd = function (str) {return this.indexOf(str)!== this.length - str.length ? this + str : '' + this};
    String.prototype.isEmpty = function () {return this == ''};
    String.prototype.truncate = function (n) {
        if (this.length <= n)
            return '' + this;
        if (n < 4)
            return '.'.repeat(n);
        let str = this.slice(0,n-2);
        return str.slice(0,str.lastIndexOf(' ')) + '...';
    };
    String.format = function () {
        let str = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            str = str.replace(`{${i-1}}`, arguments[i]);
        }
        return str;
    };
})();




console.log('test string'.ensureStart('test'));
console.log('string test'.ensureEnd('test'));
console.log('string test'.isEmpty());
console.log(''.isEmpty());
console.log('string test'.truncate(12));
console.log('string test'.truncate(10));
console.log('string test'.truncate(5));
console.log('string test'.truncate(2));
console.log('hello my string'.truncate(16));
console.log('hello my string'.truncate(14));
console.log('hello my string'.truncate(8));
console.log('hello my string'.truncate(4));
console.log('hello my string'.truncate(2));
console.log('the quick brown fox jumps over the lazy dog'.length);
console.log('the quick brown fox jumps over the lazy dog'.truncate(43));
console.log('the quick brown fox jumps over the lazy dog'.truncate(10));
console.log('the quick brown fox jumps over the lazy dog'.truncate(6));
console.log(String.format('The {0} {1} fox', 'quick', 'brown'));
console.log(String.format('jumps {0} {1}', 'dog'));