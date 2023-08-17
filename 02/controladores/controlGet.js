const express = require('express');

const { convidados } = require('../dados/colecao');

const listarConvidados = (req, res) => {

    const nome = req.query;

    if (nome) {
        return res.json({ mensagem: 'Convidado presente' });
    } else if (!nome) {
        return res.status(404).json({ mensagem: 'O convidado buscado não está presente na lista' })
    }

    res.json(convidados);
}

module.exports = {
    listarConvidados
}