const app = require('./app');


const server = 

server.on('error', (error) => {
    switch (error.code) {
        case 'EACCES':
          console.log(`
            [ERROR] A aplicação não tem permissões suficientes para abrir o servidor.
            [DEBUG] Para sua segurança, estamos exterminando o processo do Ciphus.
          `);
          process.kill(0);
          break;
        case 'EADDRINUSE':
          console.log('[EADDRINUSE] ERRO');
          break;
        default:
          console.log(`[ERROR] O erro não foi identificado ${error.code}`);
      }    
})