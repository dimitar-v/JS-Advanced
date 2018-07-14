class LineManager {
    constructor(arrStops){
        this.stops = arrStops;
        this.currentStop = 0;
        this.delay = 0;
        this.totalTime = 0;
    }
    
    get stops() {
        return this._stops;
    }

    set stops(value) {
        for (const obj of value) {
            if (typeof obj.name !== "string" || obj.name ==='' || typeof obj.timeToNext !== 'number' || obj.timeToNext < 0 ){
                throw  new Error('Invalid input');
            }
        }
        this._stops = value;
    }

    get atDepot(){
        return this.currentStop === this._stops.length - 1;
    }

    get nextStopName(){
        if (this.atDepot)
            return 'At depot.';
        
        return this.stops[this.currentStop+1].name;
    }

    get currentDelay(){
        return this.delay;
    }

    arriveAtStop(minutes){
        if (minutes < 0)
            throw new Error('Minutes cannot be negative');

        if(this.atDepot)
            throw new Error('Last stop reached');

        this.delay += minutes - this.stops[this.currentStop].timeToNext;
        this.totalTime += minutes;
        this.currentStop++;

        return !this.atDepot;
    }

    toString(){
        let nextStop = this.atDepot ? 'Line summary\n- Course completed\n' : `Line summary\n- Next stop: ${this.nextStopName}\n`;
        return nextStop + `- Stops covered: ${this.currentStop}\n- Time on course: ${this.totalTime} minutes\n- Delay: ${this.currentDelay} minutes`;
    }
}


// Initialize a line manager with correct values
const man = new LineManager([
    {name: 'Depot', timeToNext: 4},
    {name: 'Romanian Embassy', timeToNext: 2},
    {name: 'TV Tower', timeToNext: 3},
    {name: 'Interpred', timeToNext: 4},
    {name: 'Dianabad', timeToNext: 2},
    {name: 'Depot', timeToNext: 0},
]);

// Travel through all the stops until the bus is at depot
while(man.atDepot === false) {
    console.log(man.toString());
    man.arriveAtStop(4);
}

console.log(man.toString());

// Should throw an Error (minutes cannot be negative)
//man.arriveAtStop(-4);
// Should throw an Error (last stop reached)
//man.arriveAtStop(4);

// Should throw an Error at initialization
//const wrong = new LineManager([
//    { name: 'Stop', timeToNext: { wrong: 'Should be a number'} }
//]);
