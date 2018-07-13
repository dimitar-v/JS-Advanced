function createMixins() {

    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };
        
        classToExtend.prototype.isFast = function () {
            return this.processorSpeed > (this.ram / 4);
        };
        
        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
        }
    }
    
    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            return this.manufacturer === this.keyboard.manufacturer &&
                this.manufacturer === this.monitor.manufacturer;
        };

        classToExtend.prototype.isClassy = function () {
            return this.battery.expectedLife >= 3 &&
                (this.color === 'Silver' || this.color === 'Black') &&
                this.weight < 3;
        };
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}


let bat = new Battery('Lenovo', 3);
let lap = new Laptop('Lenovo', 3.5, 8, 1000, 1.8, 'Black', bat);
console.log(lap);
computerQualityMixin(Laptop);
console.log(lap.getQuality());
console.log(lap.isFast());
console.log(lap.isRoomy());

createMixins();