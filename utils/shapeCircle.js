

function shapeCircle(){
return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${data.shapecolor}"/><text x="150" y="115" font-size="60" text-anchor="middle" fill="${data.textcolor}">${data.letters}
</text></svg>`
}


module.exports = shapeCircle;