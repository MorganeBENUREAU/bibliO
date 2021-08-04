require('dotenv').config();

const express = require('express');
const session = require('express-session');

const apiRouter = require('./app/routers/api');
const websiteRouter = require('./app/routers/website');

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'app/views');


// On configure la session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));


app.use(express.static('public'));


// Body parser
app.use(express.json());


// Middleware perttant d'extraire les données des requetes POST si présentes.
app.use(express.urlencoded({ extended: true }));


// Routage
app.use('/api', apiRouter);
app.use('/', websiteRouter);


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});