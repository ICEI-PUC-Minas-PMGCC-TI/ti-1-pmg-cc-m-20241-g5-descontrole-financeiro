var db = {
    Topicos: [
        { id: '1', nome: 'Investimento', dificuldade: 'Alta', descricao: 'Como fazer seu dinheiro render por meio de investimentos' },
        { id: '2', nome: 'Reserva de Emergência', dificuldade: 'Média', descricao: 'Tenha seu dinheiro para alguma necessidade inesperada' },
        { id: '3', nome: 'Saúde Financeira', dificuldade: 'Alta', descricao: 'Sinta-se mentalmente bem de acordo com sua vida financeira' },
        { id: '4', nome: 'Economias', dificuldade: 'Baixo', descricao: 'Aprenda a como economizar de forma eficiente' }
    ]
};

var inv = document.getElementById('I');
var Reserv = document.getElementById('R');
var Saude = document.getElementById('S');
var Econ = document.getElementById('E');
var descriptionBox = document.getElementById('description-box');


inv.addEventListener('mouseenter', function(){
    var descricao = db.Topicos.find(function(topico) {
        return topico.nome === 'Investimento';
    }).descricao;
    descriptionBox.textContent = descricao;
})


Reserv.addEventListener('mouseenter', function(){
    var descricao = db.Topicos.find(function(topico) {
        return topico.nome === 'Reserva de Emergência';
    }).descricao;
    descriptionBox.textContent = descricao;
});

Saude.addEventListener('mouseenter', function(){
    var descricao = db.Topicos.find(function(topico) {
        return topico.nome === 'Saúde Financeira';
    }).descricao;
    descriptionBox.textContent = descricao;
});

Econ.addEventListener('mouseenter', function(){
    var descricao = db.Topicos.find(function(topico) {
        return topico.nome === 'Economias';
    }).descricao;
    descriptionBox.textContent = descricao;
});