// URL da página de cadastro
const CADASTRO_URL = "../Cadastro/cadastro.html";

// Inicializa o banco de dados de usuários
var db_usuarios = JSON.parse(localStorage.getItem('db_usuarios')) || { usuarios: [] };
var usuarioCorrente = JSON.parse(sessionStorage.getItem('usuarioCorrente')) || {};

// Função para validar o login do usuário
function loginUser() {
    // Captura os valores dos campos do formulário de login
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    // Verifica todos os usuários no banco de dados
    for (var i = 0; i < db_usuarios.usuarios.length; i++) {
        var usuario = db_usuarios.usuarios[i];

        // Se o login e senha conferem, salva os dados do usuário corrente e redireciona
        if (login === usuario.login && senha === usuario.senha) {
            usuarioCorrente = usuario;
            sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));

            // Redireciona para a página inicial ou outra página após login bem-sucedido
            window.location.href = "../principal/src/index.html"; // substitua pelo URL da página desejada
            return;
        }
    }

    // Se o login ou senha estiverem incorretos, exibe uma mensagem de erro
    alert('Login ou senha incorretos. Tente novamente.');
}

// Função para deslogar o usuário
function logoutUser() {
    usuarioCorrente = {};
    sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioCorrente));
    window.location.href = CADASTRO_URL; // Redireciona para a página de cadastro ou login
}

// Inicializa a aplicação de login
function initLoginApp() {
    // Carrega o banco de dados de usuários a partir do localStorage
    var usuariosJSON = localStorage.getItem('db_usuarios');
    if (!usuariosJSON) {
        db_usuarios = { usuarios: [] };
    } else {
        db_usuarios = JSON.parse(usuariosJSON);
    }

    // Carrega o usuário corrente a partir do sessionStorage
    var usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
    }
}

// Inicializa a aplicação de login ao carregar o script
initLoginApp();
