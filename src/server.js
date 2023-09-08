// Importa o módulo 'http' para criar um servidor HTTP
const http = require('http');

// Define o nome do host (local) onde o servidor estará disponível
const host = 'localhost';

// Define a porta em que o servidor estará escutando
const port = 3000;

// Importa o objeto 'stats' do módulo './pcRamUsage' para obter informações de RAM
const stats = require('./pcRamUsage');

// Cria um servidor HTTP que lida com as requisições HTTP
http.createServer((req, res) => {
    // Obtém a URL da requisição
    let url = req.url;

    // Verifica se a URL da requisição é '/stats'
    if (url === '/stats') {
        // Se for, converte o objeto 'stats' em JSON e envia como resposta
        res.end(JSON.stringify(stats, null, 2));
    } else {
        // Caso contrário, envia uma mensagem de boas-vindas
        res.end('Seja bem vindo ao servidor!');
    }
}).listen(port, () => {
    // Inicia o servidor e exibe uma mensagem no console quando inicia
    console.log('Server is running in ' + host + ':' + port);
});



