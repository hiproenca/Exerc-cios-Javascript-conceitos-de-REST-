const express = require('express');

const middleware = express();

//Independente

const validadorSenha = ((req, res, next) => {
    //console.log(req);
    let senha = req.query.senha;
    let validador = 'cubos123';




    if (senha === validador) {
        next();

    } else {
        return res.status(401).json({ mensagem: 'Usuário não autorizado' });

    }

});

//middleware.use('/alunos');

//middlware.use('/alunos/:id');

module.exports = {
    validadorSenha
}