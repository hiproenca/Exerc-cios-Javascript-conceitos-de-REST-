const express = require('express');

const patch = express();

const { atualizarInfo } = require('../controladores/controlpatch')

patch.use(express.json());

patch.patch('/livros/:id', atualizarInfo)

module.exports = patch