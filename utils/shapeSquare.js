
function shapeSquare(){
return`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="${data.shapecolor}" /><text x="150" y="115" font-size="40" text-anchor="middle" fill="${data.textcolor}">${data.letters}</text></svg>
    `
}

module.exports = shapeSquare;