class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  
  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }

  set area( newArea ){
  	this.area = newArea;
  }

  emptyArea(){
  	this.area = "";
  }

}

const square = new Polygon(10, 10);

console.log(square.area);