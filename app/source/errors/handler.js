exports["not-found"] = async (request, response) => {
    response.status = 404;
    response.send('NÃO ENCONTRADO');
};

exports["not-authorized"] = async (request, response) => {
    response.status = 401;
    response.send('NÃO AUTORIZADO')
};