const Shape = require('./shapes')

class Circle extends Shape{

render(){
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
}

}

module.exports = Circle;


// constructor(){
//     this.color = "";
// }

// setColor(color) {
//     this.color = color;
// }