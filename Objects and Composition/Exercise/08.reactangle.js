function rectangle(width, height, color){
    class obj {
        constructor(width, height,color){
            this.width = Number(width);
            this.height = Number(height);
            this.color = color[0].toUpperCase() + color.slice(1).toLowerCase();
        }

        calcArea () {
            let area = this.width * this.height;
            this.are = area;
            return area;
        }

    }
    const rectangle = new obj(width, height, color);
    return rectangle;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());