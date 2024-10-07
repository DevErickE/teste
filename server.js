const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path'); // Para trabalhar com caminhos de arquivos

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'teste_api')));

// Definir rotas para páginas HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'teste_api', 'index.html'));
});

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'teste_api', 'sobre.html'));
});

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'teste_api', 'contato.html'));
});

// Exemplo de uma rota da API que retorna dados JSON
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Node.js API!' });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
