class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  getArea() {
    return this.height * this.width;
  }
}

module.exports = Rectangle;


// IN NODE

// > const Rectangle = require('./rectangle.js');
// undefined
// > const rect = new Rectangle(4, 10);
// undefined
// > rect.getArea();
// 40
// > 