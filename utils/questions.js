const questions = [
    {
        type: 'input',
        message: 'Please input up to 3 letters?',
        name: 'letters',
    },
    {
        type: 'input',
        message: 'Please enter the color of the text? color or hex?',
        name: 'textcolor',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape?',
        choices: [
          'circle',
          'triangle',
          'square',
        ],
    },
    {
        type: 'input', 
        message: 'What color would you like the shape to be?',
        name: 'shapecolor',
    },
]

module.exports = questions;