const express = require("express");
const hbs = require("hbs");
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('./public'));

app.get("/", (req, res) => {
    res.render('home', {
        nombre: 'Hory',
        titulo: 'Curso Node Fernando Herrera',
    });
  });

  app.get("/generic", (req, res) => {
    res.render('generic', {
        nombre: 'Hory',
        titulo: 'Curso Node Fernando Herrera',
    });
  });

  app.get("/elements", (req, res) => {
    res.render('elements', {
        nombre: 'Hory',
        titulo: 'Curso Node Fernando Herrera',
    });
  });

app.get("*", (req, res) => {
  res.send("404 | Page Not Found");
});
app.listen(port, ()=>{
    console.log("listening on port " + port);
});
