const configs = require('../../configs/handler'); // Importing configs handler
const Web_Handler = require('../../errors/server/handler'); // Importing web application errors handler
const { generateRandomPort } = require('../../functions/server/generateRandomPort'); // Importing the generate ports funtion

const Web_Server = async (application, port) => {
        // Validating if received port is a valid port
        if  (port && !isNaN(port) && port >= configs['application:http:port:minimum'] && port <= configs['application:http:port:maximum'] ) {
            console.log(1)
            application.set('port', port);
        // If received port isnt a valid port, we will generate a new port
        } else {
            console.log(2)
            application.set('port', await generateRandomPort(configs['application:http:port:minimum'], configs['application:http:port:maximum']))
        }

        const Web_Application = application.listen(
            application.get('port'), () => {
                var server_application_host = (Web_Application.address().address || '127.0.0.1');
                var server_application_port = Web_Application.address().port;

                if (server_application_host === '::') {
                    server_application_host = "http://localhost"
                }

                console.log('[Server] Listening in => %s:%s', server_application_host, server_application_port)
            }
        );

        // Error handler for web application
        Web_Application.on('error', Web_Handler.error); 
}

module.exports = { Web_Server };