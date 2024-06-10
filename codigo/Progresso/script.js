// Função para atualizar a barra de progresso com base nos acertos do usuário
function atualizarBarraDeProgresso() {
    // Recuperar o banco de dados de usuários do localStorage
    let db_usuarios = JSON.parse(localStorage.getItem('db_usuarios'));

    // Verificar se o banco de dados de usuários existe e se contém usuários
    if (db_usuarios && db_usuarios.usuarios.length > 0) {
        // Suponha que você queira ler os acertos do usuário atual usando o login
        let loginUsuario = 'vi'; 

        // Encontrar o usuário com o login especificado
        let usuario = db_usuarios.usuarios.find(user => user.login === loginUsuario);

        // Verificar se o usuário foi encontrado
        if (usuario) {
            let acertos = usuario.acertos;

            // Verificar se os acertos são maiores que zero antes de atualizar a barra de progresso
            if (acertos > 0) {
                // Define o valor máximo da barra de progresso (por exemplo, 100)
                let maxAcertos = 25;

                // Calcula a largura da barra de progresso com base na contagem de acertos
                let largura = (acertos * 5);

                // Atualiza a largura da barra de progresso
                let progressBarFill = document.querySelector('.progress-bar-fill');
                progressBarFill.style.width = largura + '%';
            } else {
                // Se os acertos forem zero, oculta a barra de progresso
                let progressBarFill = document.querySelector('.progress-bar-fill');
                progressBarFill.style.width = '0%';
            }
        } else {
            console.log('Usuário não encontrado.');
        }
    } else {
        console.log('Banco de dados de usuários vazio ou inexistente.');
    }
}

// Chama a função ao carregar a página
window.onload = function() {
    atualizarBarraDeProgresso();
};
