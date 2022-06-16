exports.action = (application, port) => {
    
    // detecta se a porta foi enviada através da variável na função
    if (port) {
        application.set('port', port);
    } else {
        // se a opção acima for null, carrega essa
        console.log()
    }

    application.listen(
        application.get('port'), () => {
            var server_application_host = (server.address().address || '127.0.0.1');
            var server_application_port = server.address().port;

            if (server_application_host === '::') {
                server_application_host = "http://localhost"
            }

            console.log('[Server] Listening in => %s:%s', server_application_host, server_application_port)
        }
    );
}