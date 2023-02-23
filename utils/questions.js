const questions = [
    {
        type: 'input',
        name: 'letters',
        message: 'Please input up to 3 letters?',
        validate: function(input) {
            if(input.length <= 3 && input.length !== 0) {
                return true;
            }
            else {
                return "Text must be <= 3 characters!"
            }
        }
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