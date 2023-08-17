const express = require('express');

const app = express();

const rotasGet = require('./rotas/get');

const rotasPost = require('./rotas/post');

const rotasDelete = require('./rotas/delete');

app.use(rotasGet);

app.use(rotasPost);

app.use(rotasDelete);

app.listen(3000);

