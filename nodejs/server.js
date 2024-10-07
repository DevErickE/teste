const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Rota de exemplo para a API
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Api test fist' });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
