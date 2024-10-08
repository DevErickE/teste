// URL da API que você quer consumir
const url = 'https://Isau.com/data';

// Realiza uma requisição GET
fetch(url)
  .then(response => response.json())  // Converte a resposta para JSON
  .then(data => console.log(data))    // Exibe os dados recebidos
  .catch(error => console.error('Erro:', error));  // Trata erros
