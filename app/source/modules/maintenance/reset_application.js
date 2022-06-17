exports.action = async () => {
    // a função deste módulo é resetar toda a aplicação e não deve ser acessada remotamente ou pelo navegador.
    console.log('[Killing Process]');
    process.kill(0);
}