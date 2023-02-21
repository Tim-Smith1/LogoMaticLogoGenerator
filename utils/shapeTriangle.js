
function shapeTriangle() {
    
return`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${data.shapecolor}" /><text x="150" y="140" font-size="40" text-anchor="middle" fill="${data.textcolor}">${data.letters}</text></svg>
    `
}

module.exports = shapeTriangle;