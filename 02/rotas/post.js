const express = require('express');

const rotasPost = express();

const { addConvidado } = require('../controladores/controlPost');

rotasPost.post('/convidados', addConvidado);

module.exports = rotasPost;