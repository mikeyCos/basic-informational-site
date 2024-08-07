import http from "http";
import fs from "fs";
import express from "express";

const port = 3000;

// Vanilla node
const server = http.createServer((req, res) => {
  const { dirname } = import.meta;
  const { url } = req;

  let filepath = `${dirname}/public/views`;
  let contentType = "text/html";
  res.statusCode = 200;

  if (!url.endsWith(".css"))
    switch (url) {
      case "/":
        filepath += `${url}index.html`;
        break;
      case "/about":
      case "/contact-me":
        filepath += `${url}.html`;
        break;
      case "/home":
        res.statusCode = 301;
        res.setHeader("Location", "/");
        res.end();
        break;
      default:
        res.statusCode = 404;
        filepath += "/404.html";
    }
  else {
    filepath = `${dirname}/public${url}`;
    contentType = "text/css";
  }

  fs.readFile(filepath, (err, content) => {
    if (err) throw err;

    res.setHeader("Content-Type", contentType);
    res.end(content);
  });
});

server.listen(port, () => {
  console.log("Server running with Vanilla NodeJS...");
});
