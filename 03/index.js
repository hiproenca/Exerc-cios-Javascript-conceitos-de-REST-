const express = require('express');

const app = express();

const get = require('./rotas/get');

const post = require('./rotas/post');

const put = require('./rotas/put');

const patch = require('./rotas/patch');

const del = require('./rotas/delete');

app.use(get);

app.use(post);

app.use(put);

app.use(patch)

app.use(del);

app.listen(3000);