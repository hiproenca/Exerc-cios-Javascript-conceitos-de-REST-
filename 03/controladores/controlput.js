const express = require('express');

let { listaDeLivros } = require('../dados/colecao');

const atualizarLivro = (req, res) => {
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body;
    const idLivros = listaDeLivros.livros.find((elemento) => {
        return elemento.id === Number(id);
    })


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

    if (!idLivros) {
        res.status(404).json({ mensagem: 'Livro não encontrado no Id fornecido' })
    }

    idLivros.titulo = titulo;
    idLivros.autor = autor;
    idLivros.ano = ano;
    idLivros.numPaginas = numPaginas;

    res.json({ mensagem: 'Livro substituido com sucesso' })
}

module.exports = {
    atualizarLivro
}