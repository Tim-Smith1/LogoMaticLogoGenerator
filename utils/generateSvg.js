const Circle = require('./Circle');
const Triangle = require('./Triangle');
const Square = require('./Square')
const Shapes = require('./shapes')
const questions = require('./questions');


class SVG {
    constructor(){this.text='', this.shape=''}

    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;

    }
    setText(message, color){
        if (message.length > 3){
            throw new Error("Text must not exceed 3 characters.")
        } 
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`
    }

    setShape(shape){
        this.shape = shape

    }
}

module.exports = SVG;



// function generateSvg(data) {
//     var bacon = "";
//     if (data.shape === 'circle'){
//         //shapeCircle();
//         const circle = new Circle();
//         //(data.shapecolor, data.textcolor, data.letters);
//         console.log(circle);
//         //const circle = new Circle();
//         circle.setColor(data.shapecolor);
//         bacon = circle.render();

        // return `
        // <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${data.shapecolor}"/><text x="150" y="115" font-size="60" text-anchor="middle" fill="${data.textcolor}">${data.letters}
        // </text></svg>`;
    // } else if (data.shape === 'triangle') {
    //     return `
    //     <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${data.shapecolor}" /><text x="150" y="140" font-size="40" text-anchor="middle" fill="${data.textcolor}">${data.letters}</text></svg>
    //     `;
    // } else if (data.shape === 'square') {
    //     return `
    //     <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="${data.shapecolor}" /><text x="150" y="115" font-size="40" text-anchor="middle" fill="${data.textcolor}">${data.letters}</text></svg>
    //     `;
    // } else {
    //     return 'false no shape selected';
    // }
//}