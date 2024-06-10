const fs = require("fs");

const textInput = fs.readFileSync("./txt/input.txt", "utf-8");

const txtOut = `This is a text added in avocado file: ${textInput}. \n Created on ${Date.now()}`;

fs.writeFileSync("./txt/output.txt", txtOut);
// console.log("File written");

//Non-Blocking, asynchronous way

fs.readFile("./txt/start.txt", 'utf-8', (err, data1)=>{
    fs.readFile('./txt/'+ data1 +'.txt', 'utf-8', (err, data2)=>{
        console.log(data2)
    })
})

