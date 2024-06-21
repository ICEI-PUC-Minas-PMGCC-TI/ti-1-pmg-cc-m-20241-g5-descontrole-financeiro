document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var login = document.getElementById('login').value;
        var senha = document.getElementById('senha').value;

        var usuarioValido = validarLogin(login, senha);

        if (usuarioValido) {
            sessionStorage.setItem('usuarioCorrente', JSON.stringify(usuarioValido));
            alert('Login realizado com sucesso!');
            window.location.href = '../teste_principal/principal/src/index.html';
        } else {
            alert('Login ou senha inválidos!');
        }
    });
});

function validarLogin(login, senha) {
    var db_usuarios = JSON.parse(localStorage.getItem('db_usuarios')) || { users: [] };
    var usuarios = db_usuarios.users;
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].username === login && usuarios[i].password === senha) {
            return usuarios[i];
        }
    }
    return null;
}
