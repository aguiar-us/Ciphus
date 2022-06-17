const app = require('./app');
const { Web_Server } = require('./functions/server/openServer');

  Web_Server(app, 100000);
  // You can configure your own port to run this application.
  // Use: Web_Server(app, <your_int_port_here>). Ex: Web_Server(app, 443)

app.on('error', (error) => {
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