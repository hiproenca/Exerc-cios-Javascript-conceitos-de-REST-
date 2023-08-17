const express = require('express');

const put = express();

put.use(express.json());

const { atualizarLivro } = require('../controladores/controlput');

put.put('/livros', atualizarLivro);

module.exports = put;