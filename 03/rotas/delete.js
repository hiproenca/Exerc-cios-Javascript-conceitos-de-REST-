const express = require('express');

const del = express();

const { deletarLivro } = require('../controladores/controldelete');

del.delete('/livros/:id', deletarLivro);

module.exports = del;