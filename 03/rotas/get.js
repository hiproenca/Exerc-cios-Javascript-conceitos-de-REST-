const express = require('express');

const get = express();

const { consultarColecao, consultaId } = require('../controladores/controlget');

get.get('/livros/:id', consultaId);

get.get('/livros', consultarColecao);







module.exports = get;