const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const oRoutes = require('./routes/options'); 

// Requirements to use moment
var Handlebars = require("handlebars");
var MomentHandler = require("handlebars.moment");
MomentHandler.registerHelpers(Handlebars);

// hbs.registerHelper('dateFormat', require('handlebars-dateformat'));

const app = express();
app.set('port', 3000);

// this need to be after the set of the port if not this wont work
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.engine('hbs', engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');

// app.listen(3000, ()=>{
//     console.log('Server corriendo en http://localhost:3000');
// });

app.use(myconnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'crudp'

}));

app.use('/', oRoutes);

app.listen(app.get('port'), ()=>{
    console.log('Listening on port', app.get('port'));
    console.log('Listening on port: http://localhost:3000');
});

app.get('/', (req, res) => {
    res.render('home');
});

