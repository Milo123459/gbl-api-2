const express = require("express");
const app = express();
app.use("/static", express.static("images"));
app.set("view engine", "ejs");
require("fs")
  .readdirSync("./views/")
  .map((file) => {
    if (file.endsWith(".ejs")) {
      app.get(
        "/" + file.replace(/_/gi, "/").substring(0, file.length - 4),
        (req, res) => res.render(file.substring(0, file.length - 4))
      );
    }
  });
app.get("/", async (req, res) => res.render("index"));
app.get("/examples/",async(req,res) => res.render("examples"))
app.use(function (req, res) {
  res.status(404);
  res.render("404", {
    URL: req.url,
  });
});
app.listen(3000, () => console.log("Listening"));

require("./md");
