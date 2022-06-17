const generateRandomPort = async (minimum, maximum) => {

    let port = await Math.floor(Math.random() * (maximum - minimum + 1) + minimum);

    return port;
}

module.exports = { generateRandomPort };