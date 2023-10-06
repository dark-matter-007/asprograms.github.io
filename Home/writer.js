
function writeIntoFile() {
const fs = require('fs')
fs.writeFile("./visitors.txt", "112", (err) => { console.log (err) })
console.log("success writing")
}