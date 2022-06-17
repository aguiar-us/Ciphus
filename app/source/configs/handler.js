const configs = require('./application.json');

exports["application:http:port:minimum"] = configs.server.ports.http.minimum;
exports["application:http:port:maximum"] = configs.server.ports.http.maximum;