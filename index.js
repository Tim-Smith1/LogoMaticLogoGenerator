const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./utils/questions');
const generateSvg = require('./utils/generateSvg')
const shapeCircle = require('./utils/shapeCircle');


//function init() {
inquirer
    .prompt(questions)
    
.then((data) => {
    
    fs.writeFile('./examples/logo.svg', generateSvg(data), (err) =>
    err ? console.error(err) : console.log('Generated logo.svg!'))
    
  }
  );  
//}
  
// Function call to initialize app
//init();

