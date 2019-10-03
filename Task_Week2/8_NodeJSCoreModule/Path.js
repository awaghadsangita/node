var path = require("path");  
pathModuleFunction=()=>{
// Normalization  
console.log('normalization : ' + path.normalize('/http:wwww.github.com/awaghadsangita/..'));  
// Join  
console.log('joint path : ' + path.join('/htttp:', 'wwww.github.com', 'awaghadsangita'));  
// Resolve  
console.log('resolve : ' + path.resolve('Path.js'));  
// Extension   
console.log('ext name: ' + path.extname('Path.js'));    
}
module.exports=pathModuleFunction();