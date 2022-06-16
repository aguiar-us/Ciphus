const getRandomPort = () => {
    return Math.floor(Math.random() * (65535 - 1 + 1) + min);
}