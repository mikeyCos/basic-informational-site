import express from "express";
import fs from "fs";

// Express
const port = 3000;
const { dirname } = import.meta;
const app = express();

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.sendFile("./public/views/index.html", { root: dirname });
});

app.get("/home", (req, res) => {
  res.redirect(301, "/");
});

app.get("/about", (req, res) => {
  res.set("Content-Type", "text/html");
  res.sendFile("./public/views/about.html", { root: dirname });
});

app.get("/contact-me", (req, res) => {
  res.set("Content-Type", "text/html");
  res.sendFile("./public/views/contact-me.html", { root: dirname });
});

app.get(/^.*(.css)$/, (req, res) => {
  // Path ends with '.css'
  res.sendFile(`public/${req.url}`, { root: dirname });
});

app.use((req, res) => {
  res.status(404).sendFile("./public/views/404.html", { root: dirname });
});

app.listen(port, () => console.log("Server running with Express..."));
