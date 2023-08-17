const express = require('express');

let { bancoDeDados } = require('../dados/colecao-a');
let { identificadorAluno } = require('../dados/colecao-a');


const app = express();

//GET

const listaAlunos = (req, res) => {

    return res.json(bancoDeDados.alunos);
}

const idAlunos = (req, res) => {
    const { id } = req.params;
    const alunosId = bancoDeDados.alunos.find((elemento) => {
        return elemento.id === Number(id);
    })

    if (alunosId) {
        return res.status(200).json(alunosId);
    } else if (!alunosId) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado' });
    } else {
        res.status(400).json({ mensagem: 'O ID utilizado não é válido' })
    }

}

//POST

const cadastrarAlunos = (req, res) => {

    const { nome, sobrenome, idade, curso } = req.body;


    if (!nome) {
        return res.status(400).json({ mensagem: 'O nome é obrigatório' })
    } else if (!sobrenome) {
        return res.status(400).json({ mensagem: 'O sobrenome é obrigatório' });
    } else if (!idade) {
        return res.status(400).json({ mensagem: 'A idade é obrigatória' });

    } else if (idade < 18) {
        return res.status(400).json({ mensagem: 'É necessário ser maior de idade' });
    }

    if (!curso) {
        return res.status(400).json({ mensagem: 'O curso é obrigatório' })
    }

    const adicionaAluno = {
        id: bancoDeDados.identificadorAluno++,
        nome,
        sobrenome,
        idade,
        curso
    }

    bancoDeDados.alunos.push(adicionaAluno);
    return res.status(201).json();

}

//PUT

const editorAlunos = (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, idade, curso } = req.body;

    const alunosId = bancoDeDados.alunos.find((elemento) => {
        return elemento.id === Number(id);
    })



    if (!nome) {
        return res.status(400).json({ mensagem: 'O nome é obrigatório' })
    } else if (!sobrenome) {
        return res.status(400).json({ mensagem: 'O sobrenome é obrigatório' });
    } else if (!idade) {
        return res.status(400).json({ mensagem: 'A idade é obrigatória' });

    }

    if (!curso) {
        return res.status(400).json({ mensagem: 'O curso é obrigatório' })
    }

    if (!alunosId) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }

    alunosId.nome = nome;
    alunosId.sobrenome = sobrenome;
    alunosId.idade = idade;
    alunosId.curso = curso;

    return res.status(204).send();
}

//PATCH

const atualizarNomeSobrenome = (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome } = req.body;
    const alunosId = bancoDeDados.alunos.find((elemento) => {
        return elemento.id === Number(id);
    })

    if (!alunosId) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }

    alunosId.nome = nome;
    alunosId.sobrenome = sobrenome;

    return res.status(204).send();

}

//DELETE

const deletarAlunos = (req, res) => {
    const { id } = req.params;
    const alunosId = bancoDeDados.alunos.find((elemento) => {
        return elemento.id === Number(id);
    })


    if (alunosId > alunosId) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }

    if (!alunosId) {
        return res.status(400).json({ mensagem: 'É necessário ser um ID válido' })
    }

    alunosId = bancoDeDados.alunos.find((elemento) => {
        return elemento.id !== Number(id);
    })
    return res.status(203).json({ mensagem: 'Removido com sucesso' });
}

module.exports = {
    listaAlunos,
    idAlunos,
    cadastrarAlunos,
    editorAlunos,
    atualizarNomeSobrenome,
    deletarAlunos
}