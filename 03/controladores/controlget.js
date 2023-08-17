const express = require('express');

let { listaDeLivros } = require('../dados/colecao');


const consultarColecao = (req, res) => {

    res.json(listaDeLivros.livros)


}

const consultaId = (req, res) => {


    const { id } = req.params

    const idLivros = listaDeLivros.livros.find((elemento) => {
        return elemento.id === Number(id);
    })


    if (!idLivros) {
        return res.status(404).json({ mensagem: 'Não existe livro para o ID informado.' })

    }
    return res.json(idLivros);
}

module.exports = {
    consultarColecao,
    consultaId

}