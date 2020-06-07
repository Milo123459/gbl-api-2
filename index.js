const express = require("express");
const app = express();
app.use("/static", express.static("images"));
app.set("view engine", "ejs");
app.get("/", async (req, res) =>
  res.render("index", {
  })
);
app.use(function(req,res){
  res.status(404);
  res.render("404",{
    URL: req.url
  })
})
app.listen(3000, () => console.log("Listening"));
