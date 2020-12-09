const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const bodyParser = require("body-parser");

app.set("views", __dirname + "/views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.set("view engine", "hbs");

app.disable("x-powered-by");
app.use(express.static("public"));

const port = process.env.PORT || 3000;

require("./routes")(app);

app.listen(port, () => {
    console.log(
        "Serveris paleistas porte:" + port + ".Sustabdymui spauskite CTRL ir C"
    );
});
