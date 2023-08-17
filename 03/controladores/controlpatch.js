const express = require('express');

let { listaDeLivros } = require('../dados/colecao');

const atualizarInfo = (req, res) => {
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body;
    const idLivros = listaDeLivros.livros.find((elemento) => {
        return elemento.id === Number(id);
    })

    if (!idLivros) {
        res.status(404).json({ mensagem: 'Livro não encontrado no Id fornecido' })
    }

    idLivros.titulo = titulo;
    idLivros.autor = autor;
    idLivros.ano = ano;
    idLivros.numPaginas = numPaginas;

}

module.exports = {
    atualizarInfo
}