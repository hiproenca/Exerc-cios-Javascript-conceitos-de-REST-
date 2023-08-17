const express = require('express');

let { listaDeLivros } = require('../dados/colecao');

const deletarLivro = (req, res) => {
    let { id } = req.params;

    let idLivros = listaDeLivros.livros.find((elemento) => {
        return elemento.id === Number(id);
    })

    if (!idLivros) {
        return res.status(404).json({ mensagem: 'Não existe livro para o ID informado.' })

    }

    idLivros = listaDeLivros.livros.find((elemento) => {
        return elemento.id !== Number(id);
    })

    res.json({ mensagem: 'Livro deletado com sucesso' })
}

module.exports = {
    deletarLivro
}