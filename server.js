"use strict";

const http = require("http");
const quotes = require("./quotes");

function newQuote() {
    return quotes[Math.floor(Math.random() * (quotes.length))];
   };
http.createServer((req, res) => {
res.writeHead(200, {"Content-type": "text/string"});
res.write(newQuote());
res.end();
}).listen(3000);
