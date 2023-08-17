const express = require('express');

const rotaDelete = express();

const { removerDaLista } = require('../controladores/controlDelete')

rotaDelete.delete('/convidados/:nome', removerDaLista);

module.exports = rotaDelete;