require('dotenv').config();

const express = require('express');

const apiRouter = require('./app/routers/api');
const websiteRouter = require('./app/routers/website');

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './app/views');


app.use(express.static('public'));


// Body parser
app.use(express.json());

// Routage
app.use('/api', apiRouter);
app.use('/', websiteRouter);


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});