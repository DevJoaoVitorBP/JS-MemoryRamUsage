// Importa o módulo 'os' para acessar informações do sistema operacional
const os = require('os');

// Define um intervalo para executar a função repetidamente (a cada 1 segundo)
setInterval(() => {
    // Extrai funções e propriedades relevantes do módulo 'os'
    const { arch, platform, totalmem, freemem } = os;

    // Obtém a quantidade total de memória física
    const totalMemory = totalmem();

    // Obtém a quantidade de memória livre
    const freeMemory = freemem();

    // Converte a memória total para GB e arredonda para 2 casas decimais
    const totalMemoryGB = (parseInt(totalMemory) / (1024 * 1024 * 1024)).toFixed(2);

    // Converte a memória livre para MB
    const freeMemoryMB = parseInt(freeMemory) / (1024 * 1024);

    // Calcula a porcentagem de memória livre em relação à memória total e arredonda para 2 casas decimais
    const percentageMemory = ((freeMemory / totalMemory) * 100).toFixed(2);

    // Cria um objeto 'stats' com informações sobre o sistema e o uso de memória
    const stats = {
        OS: platform(), // Obtém o nome do sistema operacional
        Arch: arch(), // Obtém a arquitetura do processador
        TotalRam: `${totalMemoryGB} GB`, // Formata a memória total em GB
        FreeRam: `${parseInt(freeMemoryMB)} MB`, // Formata a memória livre em MB (arredondada)
        PercentageMemory: `${percentageMemory} %`, // Formata a porcentagem de memória livre
    };

    // Limpa o console antes de exibir as informações
    console.clear();

    // Exibe as informações em forma de tabela no console
    console.table(stats);

    // Exporta o objeto 'stats' para uso em outros módulos (não é muito comum exportar em intervalos)
    exports.stats = stats;

}, 1000); // Executa a função a cada 1 segundo