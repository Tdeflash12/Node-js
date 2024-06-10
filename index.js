const http = require("http");
const express =require("express");
const app = express();
app.get("/", (req, res) => {
  return res.send("Hello From Home Page");
  r
});
app.get("/about",(req, res) =>{
  return res.send(`hello ${req.query.name}`);
});
app.get("/signup", (req, res) =>{
  return res.end("Hello From signup Page")
});
app.listen(8000, () => console.log("Server started at 8000"))
// const myServer =http.createServer(app);

// myServer.listen(8000, () => console.log("server Started"));
