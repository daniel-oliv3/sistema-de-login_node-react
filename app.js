const express = require('express');
const app = express();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

app.get('/', async (req, res) => {
    return res.json({
        erro: false,
        mensagem: "Listar usuários"
    });
});

app.post('/cadastrar', async (req, res) => {
    const password = await bcrypt.hash("123456", 8);

    console.log(password);

    return res.json({
        erro: false,
        mensagem: "Cadastro de usuários"
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
});