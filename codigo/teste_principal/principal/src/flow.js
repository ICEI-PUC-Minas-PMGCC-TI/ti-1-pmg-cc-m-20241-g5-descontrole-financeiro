document.addEventListener('DOMContentLoaded', function () {

  const TelaCoins = document.querySelector('.profileItens');




  function UptadeCoins() {

    let usuarioCorrente = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrente) {

      let usuario = JSON.parse(usuarioCorrente);

      let project = document.createElement('div');
      project.innerHTML = `
            <div class="Perfil">
              <h1>${usuario.nome}</h1>
              <div class="Moedas">
                  <img src="/codigo/teste_principal/principal/imgs/coin.png" alt="" class="img2">
                  <h3 class="usercoins">${usuario.coins}</h3>
              </div>
            </div>
        `;


      const TelaCoins = document.querySelector('.profileItens');
      if (TelaCoins) {
        TelaCoins.appendChild(project);
      } else {
        console.error('Elemento .profileItens não encontrado');
      }
    } else {
      console.error('Nenhum dado encontrado no sessionStorage para "usuarioCorrente"');
    }
  }

  UptadeCoins();

});




function logAnchorIds() {
  const anchorElements = document.querySelectorAll('.fase a');  // Select all anchors within elements with class "fase"

  anchorElements.forEach(anchor => {
    if (!anchor.classList.contains('disabled')) {
    anchor.addEventListener('click', function () {
      console.log(`This is chapter ${anchor.id[0]} and phase ${anchor.id[1]}`);
      const url = `../questao.html?chapter=${anchor.id[0]}&phase=${anchor.id[1]}`;
      // Redirect to the URL
      window.location.href = url;
    })
  }
  });
}

// Call the function after the elements are potentially loaded

setTimeout(logAnchorIds, 1000); 
