// Your code here

class Polygon {
    constructor(Array) {
        this.Array = Array
    }

    get countSides() {
        return this.Array.length
    }

    get perimeter() {
        return this.Array.reduce((prev, curr) => prev + curr)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides == 3) {
            let side1 = this.Array[0]
            let side2 = this.Array[1]
            let side3 = this.Array[2]
            return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides == 4) {
            let [side1, side2, side3, side4] = this.Array
            return ((side1*4) == this.perimeter)
        }
    };

    get area (){
        return this.Array[0]**2
    }
}