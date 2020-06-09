var hljs = require("highlight.js"); // https://highlightjs.org/
const emoji = require("markdown-it-emoji");
// Actual default values
var md = require("markdown-it")({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ""; // use external default escaping
  },
  html: true,
});
md.use(emoji, {
  shortcuts: {
    smile: [":D", ":)", ":>"],
  },
});
require("fs")
  .readdirSync("./")
  .map((f) => {
    if (f.endsWith(".md")) {
      let markdown = md.render(require("fs").readFileSync(f).toString());
      require("fs").writeFileSync(
        `./views/${f.substring(0, f.length - 3)}.ejs`,
        require("outdent")`
            <%- include('./partials/nav.ejs') %>
            <%- include('./partials/styles.ejs') %>
            <main>
                ${markdown}
            </main>
        `
      );
    }
  });
