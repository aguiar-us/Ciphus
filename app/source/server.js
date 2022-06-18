const application = require('./app');
const { Web_Server } = require('./functions/server/openServer');

// You can configure your own port to run this application.
// Use: Web_Server(application, <your_int_port_here>). Ex: Web_Server(application, 443)

Web_Server(application, 80);