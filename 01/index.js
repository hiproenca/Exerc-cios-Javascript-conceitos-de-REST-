const express = require('express');

const middleware = require('./middleware/middleware');

const rotas = require('./rotas');

const app = express();

app.use(rotas);

app.listen(3000)