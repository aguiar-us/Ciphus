const configs = require('./application.json');

exports["application:http:port:minimum"] = configs.server.ports.http.minimum;
exports["application:http:port:maximum"] = configs.server.ports.http.maximum;

//exports["application:http:error:handler"] = null;
exports["application:http:error:handler:addres:in:use"] = configs.server.errors.handler['addres:in:use'];

exports["application:http:error:message:http:addres:access"] = configs.server.messages.http.errors['address:access']