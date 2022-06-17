const configs = require('../../configs/handler'); 
const { generateRandomPort } = require('../../functions/server/generateRandomPort');

const Web_Server = async (application, port) => {
        if  (port && !isNaN(port) && port >= configs['application:http:port:minimum'] && port <= configs['application:http:port:maximum'] ) {
            console.log(1)
            application.set('port', port);
        } else {
            console.log(2)
            application.set('port', await generateRandomPort(configs['application:http:port:minimum'], configs['application:http:port:maximum']))
        }

    // Application listener (open server)
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
}

module.exports = { Web_Server };