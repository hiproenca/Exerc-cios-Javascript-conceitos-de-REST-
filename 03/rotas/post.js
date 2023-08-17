const express = require('express');

const post = express();

post.use(express.json());

const { adicionarLivro } = require('../controladores/controlpost');

post.post('/livros', adicionarLivro);


module.exports = post;