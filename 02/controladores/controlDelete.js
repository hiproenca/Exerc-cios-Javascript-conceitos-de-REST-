const express = require('express');

const { convidados } = require('../dados/colecao');

const removerDaLista = (req, res) => {
    const nome = req.params.nome;

    if (!nome) {
        return res.status(404).json({ mensagem: 'O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.' })
    }

    const remover = convidados.find((remover) => {
        return remover.convidados !== nome;
    })

    return res.status(203).json({ mensagem: 'Nome removido da lista' })
};

module.exports = {
    removerDaLista
}