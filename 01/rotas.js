const express = require('express');

const rotas = express();

rotas.use(express.json());


const { listaAlunos, idAlunos, cadastrarAlunos, editorAlunos, deletarAlunos, atualizarNomeSobrenome } = require('./controladores/recurso-a')

const { validadorSenha } = require('./middleware/middleware');



rotas.get('/', validadorSenha);

rotas.get('/alunos', listaAlunos);

rotas.get('/alunos/:id', idAlunos);

rotas.post('/', cadastrarAlunos);

rotas.put('/alunos/:id', editorAlunos);

rotas.patch('alunos/:id', atualizarNomeSobrenome)

rotas.delete('/alunos/:id', deletarAlunos)


module.exports = rotas;