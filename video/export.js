var fs = require('fs');

let components = []
const files = fs.readdirSync('./')
files.forEach(function (item, index) {
  if (item === '.DS_Store' || item === 'export.js') return
    components.push(item)
})

let str = JSON.stringify(components)
 
 fs.writeFile('./bgurl.json',str,function(err){
 if (err) {
     console.log('error');
 }
})