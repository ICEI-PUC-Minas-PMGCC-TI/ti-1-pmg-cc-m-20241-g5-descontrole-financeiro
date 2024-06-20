var topico;

//configurar botoes

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn-selecionar').addEventListener('click', function() {
      topico = 1;
  });

  document.getElementById('btn-selecionarR').addEventListener('click', function() {
      topico = 2;
      console.log(topico);
  });

  document.getElementById('btn-selecionarS').addEventListener('click', function() {
      topico = 3;
  });

  document.getElementById('btn-selecionarE').addEventListener('click', function() {
      topico = 4;
  });
});