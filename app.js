const express = require('express');
const mustacheExpress = require('mustache-express');
const mongoose = require('mongoose');
const Antique = require('./models/antiques');
const bodyParser = require('body-parser');
const antiqueController = require('./controllers/antiqueController');
const path = require('path');
const urlencodedParser = bodyParser.urlencoded({extended: false});

const app = express();


app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views','./views');
app.use(express.static(path.join(__dirname, '../public')));

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost:27017/antiquedb');

const antique = new Antique({name: 'Painting', brand: 'Picasso', yearMade: 1935});
antique.owners.push({name: 'Ernest Hemingway', country: 'France', yearPurchased: 1937});
antique.save();


app.listen(3000, function() {
  console.log("Listening...");
});
