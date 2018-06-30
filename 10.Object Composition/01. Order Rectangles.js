let orderRectangles = (arr) =>{
    let rects = [];
    arr.forEach(r => rects.push(createRect(r)));
    function createRect([w, h]) {
        return {
            width: w,
            height: h,
            area: function () {
               return this.width * this.height;
            },
            compareTo: function (other) {
                return other.area() - this.area() || other.width - this.width;
            }
        };
    }
    return rects.sort((a,b) => a.compareTo(b));
};


console.log(orderRectangles([[10,5],[5,12]]));
console.log();
console.log(orderRectangles([[10,5], [3,20], [5,12]]));
