const express = require('express');
const router = express.Router();

router.get('/', (request, response) => response.redirect('/auth/signin/'));

router.get('/signin', (request, response) => {
    response.render('auth/signin/index')
});

router.post('/signin', (request, response) => {
    // recebe os parâmetros no body
    // verifica se todos os parâmetros foram enviados
    // sanitiza os parâmetros enviados
    // valida se os parâmetros coincidem os os armazenados no banco de dados
    console.log(request.body)
    response.send(request.body)
})


module.exports = router; 