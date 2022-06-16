const helpers = require('./helper');
const error_handler = require('./errors/handler')

const router = require('./routers/router')
const auth_router = require('./routers/auth_router')

const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use(express.static(__dirname+'/../public'));

app.use((request, response, next) => {
    response.locals.helper = helpers;
    next();
})

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use('/', router)
app.use('/auth', auth_router)

app.use('/', error_handler['not-found'])

module.exports = app;