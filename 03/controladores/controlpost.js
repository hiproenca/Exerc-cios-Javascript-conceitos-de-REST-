const express = require('express');

let { listaDeLivros } = require('../dados/colecao');

const adicionarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo) {
        return res.status(400).json({ mensagem: 'O titulo é obrigatório' })
    } else if (!autor) {
        return res.status(400).json({ mensagem: 'O autor é obrigatório' });
    } else if (!ano) {
        return res.status(400).json({ mensagem: 'O ano é obrigatório' });

    }

    if (!numPaginas) {
        return res.status(400).json({ mensagem: 'O número de páginas é obrigatório' });
    }

    const adicionar = {
        id: listaDeLivros.identificadorLivro++,
        titulo,
        autor,
        ano,
        numPaginas
    }

    listaDeLivros.livros.push(adicionar);
    return res.json(adicionar);
}

module.exports = { adicionarLivro };