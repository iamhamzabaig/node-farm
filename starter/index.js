const fs = require("fs");
const http = require("http");

const textInput = fs.readFileSync("./txt/input.txt", "utf-8");

const txtOut = `This is a text added in avocado file: ${textInput}. \n Created on ${Date.now()}`;

// fs.writeFileSync("./txt/output.txt", txtOut);
// console.log("File written");

//Non-Blocking, asynchronous way

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile("./txt/" + data1 + ".txt", "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile(
//         "./txt/final.txt",
//         `${data2} \n ${data3}`,
//         "utf-8",
//         (err) => {
//           console.log("File written");
//         }
//       );
//     });
//   });
// });

////////////////////////////////
////SERVER

const server = http.createServer((req, response) => {
  response.end("Hello from the server");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to port 8000");
});
