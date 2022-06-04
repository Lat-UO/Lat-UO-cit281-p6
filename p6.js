// Logan Thompson



class Shape {
    constructor (sides = []) {
       this.sides = sides; 
    }
    perimeter = () => (this.sides.length>=1) ? `${this.sides.reduce(perFunc)}` : `0`;
}

function perFunc(total, num) {
    return total + num;
  }

  /*
  console.log(new Shape([5, 10]).perimeter());  // 15
  console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
  console.log(new Shape().perimeter()); // 0
  */

class Rectangle extends Shape {
    constructor (length=0,width=0){
        super([length,width,length,width]);
        this.length=length;
        this.width=width;
    }
    area = () => (this.sides.length>=1) ? `${this.sides.reduce(() => this.length * this.width)}` : `0`;
}

/*
  console.log(new Rectangle(4, 4).perimeter());  // 16
  console.log(new Rectangle(4, 4).area());  // 16
  console.log(new Rectangle(5, 5).perimeter()); // 20
  console.log(new Rectangle(5, 5).area()); // 25
  console.log(new Rectangle().perimeter()); // 0
  console.log(new Rectangle().area()); // 0
*/

class Triangle extends Shape {
    constructor (sideA=0, sideB=0, sideC=0){
        super ([sideA,sideB,sideC]);
        this.sideA=sideA;
        this.sideB=sideB;
        this.sideC=sideC;
        this.halfP = (this.sideA + this.sideB + this.sideC)/2;
    }
    area = () => (this.sides.length>=1) ? `${this.sides.reduce(() => Math.sqrt(this.halfP*(this.halfP-this.sideA)*(this.halfP-this.sideB)*(this.halfP-this.sideC)) )}` : `0`;
}

/*
console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0
*/

const data = [[3,4], [5, 5], [3, 4, 5], [10], []];
for (const arr of data) {
    let object = null;
    switch(arr.length){
        case 2:
            object = new Rectangle(arr[0],arr[1]);
            text = `${(object.length == object.width)?"Square":"Rectangle"} with sides ${arr.toString()} has perimeter of ${object.perimeter()} and area ${object.area()}`;
            console.log(text);
            break;
        case 3:
            object = new Triangle(arr[0],arr[1],arr[2]);
            text = `Triangle with sides ${arr.toString()} has perimeter of ${object.perimeter()} and area ${object.area()}`;
            console.log(text);
            break;
        default:
            text = `Shape with ${arr.length} side(s) is unsupported`;
            console.log(text);
    }
};