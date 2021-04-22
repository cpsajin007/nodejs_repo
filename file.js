var fs = require('fs')
//read file
// fs.readFile('calc.js','utf8',function(err,data){
//     console.log(data)
//writefile
// fs.writeFile('calc1.js','console.log("done")',function(err){
//     console.log("DATA SAVED");
//append
fs.appendFile('calc1.js','console.log("done")',function(err){
    console.log("DATA SAVED");
    //unlink--delete a file
// fs.unlink('calc1.js',function(err){
//     console.log("DATA deleted");

})