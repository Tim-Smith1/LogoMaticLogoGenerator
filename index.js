const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./utils/questions');
const SVG = require('./utils/generateSvg')
const Circle = require('./utils/Circle');
const Triangle = require('./utils/Triangle');
const Square = require('./utils/Square');



inquirer
    .prompt(questions)
    
.then(({letters, textcolor, shapecolor, shape}) => {
   let userShape;
   
    switch (shape){
        case 'circle':
        userShape = new Circle();
        break;

        case 'triangle':
        userShape = new Triangle();
        break;

        case 'square':
        userShape = new Square();
        break;

        default: 
        return 'No shape selected';
        break;

    }
     
    userShape.setColor(shapecolor);
    let svg = new SVG();
    svg.setText(letters, textcolor);
    svg.setShape(userShape.render())
    


    fs.writeFile('./examples/logo.svg', svg.render(), (err) =>
    err ? console.error(err) : console.log('Generated logo.svg!'))
    
  }
  );  


