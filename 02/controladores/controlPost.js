const express = require('express');

const { convidados } = require('../dados/colecao');

const addConvidado = (req, res) => {
    const nome = req.body;
    console.log(nome)

    if (!nome) {
        convidados.push(nome);
        return res.json({ mensagem: 'convidado adicionado' })
    } else {
        return res.status(400).json({ mensagem: 'O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.' })
    }

};

module.exports = {
    addConvidado
}