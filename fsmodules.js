// using commonJs syntax:

const fs= require('fs');

// fs.readFile('file.txt','utf8',(err, data)=>{

//     console.log(err, data)
// })

// const a = fs.readFileSync('file.txt')
// console.log(a.toString())

// fs.writeFile('file2.txt',"This is a data",()=>{
//     console.log("Written to the file")
// })

 const b=fs.writeFileSync('file2.txt', "this is data  :)")
console.log(b)

console.log("Finished reading file")
// works on non blocking IO model