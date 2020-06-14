var fs = require('fs');

let bgComponents = []
const bgFiles = fs.readdirSync('./bg/')
bgFiles.forEach(function (item, index) {
  if (item === '.DS_Store' || item === 'export.js'|| item === 'bgurl.json') return
    bgComponents.push(item)
})

let bgStr = JSON.stringify(bgComponents)
 
 fs.writeFile('../dongdong/src/mock/bgurl.json',bgStr,function(err){
 if (err) {
     console.log('error');
 }
})

let HDcomponents = []
const HDfiles = fs.readdirSync('./4k/')
HDfiles.forEach(function (item, index) {
  if (item === '.DS_Store' || item === 'export.js'|| item === 'HDurl.json') return
    HDcomponents.push(item)
})

let HDstr = JSON.stringify(HDcomponents)
 
 fs.writeFile('../dongdong/src/mock/HDurl.json',HDstr,function(err){
 if (err) {
     console.log('error');
 }
})

let components = []
const videoFiles = fs.readdirSync('./video/')
videoFiles.forEach(function (item, index) {
  if (item === '.DS_Store' || item === 'export.js'|| item === 'videoUrl.json') return
    components.push(item)
})

let videoStr = JSON.stringify(components)
 
 fs.writeFile('../dongdong/src/mock/videoUrl.json',videoStr,function(err){
 if (err) {
     console.log('error');
 }
})