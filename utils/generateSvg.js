const shapeCircle = require('./shapeCircle');
const shapeTriangle = require('./shapeTriangle');
const shapeSquare = require('./shapeSquare')
const questions = require('./questions')

function generateSvg(data) {
    if (data.shape === 'circle'){
        //shapeCircle();
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${data.shapecolor}"/><text x="150" y="115" font-size="60" text-anchor="middle" fill="${data.textcolor}">${data.letters}
        </text></svg>`;
    } else if (data.shape === 'triangle') {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${data.shapecolor}" /><text x="150" y="140" font-size="40" text-anchor="middle" fill="${data.textcolor}">${data.letters}</text></svg>
        `;
    } else if (data.shape === 'square') {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="${data.shapecolor}" /><text x="150" y="115" font-size="40" text-anchor="middle" fill="${data.textcolor}">${data.letters}</text></svg>
        `;
    } else {
        return 'false no shape selected';
    }
}


module.exports = generateSvg;
