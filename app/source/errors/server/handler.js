const configs = require('../../configs/handler');
const { Output } = require('../../functions/log/output');

exports.error = async (error) => {
    switch (error.code) {
        case 'EACCES':
            Output({
                type: "error",
                message: configs["application:http:error:message:http:addres:access"],
                elements: []
            });
            process.kill(0);
            break;
        case 'EADDRINUSE':
            if (configs['application:http:error:handler:addres:in:use']) {
                console.log("[ERRO] O ENDEREÇO ESTÁ EM USO MAS A FUNÇÃO DE HANDLING ESTÁ ATIVADO, EM BREVE RESOLVEREMOS ESTE ERRO");
                process.kill(0);
            }
            Output({
                type: "error",
                message: configs['application:http:error:handler:addres:in:use'],
                format: []
            });
            process.kill(0);
            break;
        default:
            console.log(`[ERRO] O erro não foi identificado -> ${error.code}`);
    }
}