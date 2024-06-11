// Função para atualizar a barra de progresso com base nos acertos do usuário
function atualizarBarraDeProgresso() {
    // Recuperar o banco de dados de usuários do localStorage
    var db_usuarios = JSON.parse(localStorage.getItem('db_usuarios'));

    // Verificar se o banco de dados de usuários existe e se contém usuários
    if (db_usuarios && db_usuarios.usuarios.length > 0) {
        // Suponha que você queira ler os acertos do usuário atual usando o log

        // Encontrar o usuário com o login especificado
        let usuarioCorrente = JSON.parse(sessionStorage.getItem('usuarioCorrente'));


        console.log(usuarioCorrente);

        // Verificar se o usuário foi encontrado
        if (usuarioCorrente) {
            let acertos = usuarioCorrente.acertos;

            // Verificar se os acertos são maiores que zero antes de atualizar a barra de progresso
            if (acertos >= 0) {
                // Define o valor máximo da barra de progresso (por exemplo, 100)
                let maxAcertos = 40;

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

function updateSessionStorageWithLocalStorage() {
    // Obter a lista de usuários do localStorage
    var db_usuarios = JSON.parse(localStorage.getItem('db_usuarios'));

    // Verificar se há uma lista de usuários válida no localStorage
    if (db_usuarios && db_usuarios.usuarios) {
        // Obter o usuário corrente do sessionStorage
        var usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');

        // Verificar se há um usuário corrente armazenado no sessionStorage
        if (usuarioCorrenteJSON) {
            // Converter o usuário corrente de JSON para objeto
            var usuarioCorrente = JSON.parse(usuarioCorrenteJSON);

            // Encontrar o usuário corrente na lista de usuários do localStorage
            var usuario = db_usuarios.usuarios.find(function(user) {
                return user.id === usuarioCorrente.id;
            });

            // Verificar se o usuário corrente foi encontrado na lista
            if (usuario) {
                // Atualizar o número de acertos do usuário corrente no sessionStorage com o número de acertos do usuário no localStorage
                usuarioCorrente.acertos = usuario.acertos;

                // Atualizar os dados do usuário corrente no sessionStorage
                sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));

                console.log('Atualização bem-sucedida.');
            } else {
                console.log('Usuário corrente não encontrado na lista de usuários do localStorage.');
            }
        } else {
            console.log('Nenhum usuário corrente encontrado no sessionStorage.');
        }
    } else {
        console.log('Lista de usuários não encontrada no localStorage.');
    }
}


updateSessionStorageWithLocalStorage();

// Chama a função ao carregar a página
window.onload = function () {
    atualizarBarraDeProgresso();
};