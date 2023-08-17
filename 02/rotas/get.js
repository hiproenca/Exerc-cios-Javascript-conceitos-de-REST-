const express = require('express');

const rotasGet = express();
const { listarConvidados } = require('../controladores/controlGet')

rotasGet.get('/convidados', listarConvidados);



module.exports = rotasGet;