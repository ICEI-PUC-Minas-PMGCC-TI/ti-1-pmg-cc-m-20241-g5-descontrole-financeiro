var dadosUsuarios = JSON.parse(sessionStorage.getItem('db_usuarios'));

if (dadosUsuarios && dadosUsuarios.usuarios && dadosUsuarios.usuarios.length > 0) {
    // Assume que há apenas um usuário (o primeiro da lista)
    var usuario = dadosUsuarios.usuarios[0];

    // Obtém o número de acertos do usuário
    var acertos = usuario.acertos;

    // Calcula a largura da barra de progresso com base no número de acertos
    var larguraBarra = acertos * 10; // Cada acerto aumenta a largura em 10 pixels

    // Seleciona a barra de progresso
    var barraProgresso = document.querySelector('.progress-bar-fill');

    // Define a largura da barra de progresso
    barraProgresso.style.width = larguraBarra + 'px';
} else {
    console.log('Não foi possível recuperar os dados do usuário do localStorage.');
}

