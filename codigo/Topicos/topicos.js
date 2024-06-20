/* Modal 1 */
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

openModalButton.addEventListener("click", toggleModal);
closeModalButton.addEventListener("click", toggleModal);

/* Modal 2 */
const openModalButtonR = document.querySelector("#open-modalR");
const closeModalButtonR = document.querySelector("#close-modalR");
const modalR = document.querySelector("#modalR");
const fadeR = document.querySelector("#fadeR");

const toggleModalR = () => {
  modalR.classList.toggle("hideR");
  fadeR.classList.toggle("hideR");
};

openModalButtonR.addEventListener("click", toggleModalR);
closeModalButtonR.addEventListener("click", toggleModalR);

/* Modal 3 */
const openModalButtonS = document.querySelector("#open-modalS");
const closeModalButtonS = document.querySelector("#close-modalS");
const modalS = document.querySelector("#modalS");
const fadeS = document.querySelector("#fadeS");

const toggleModalS = () => {
  modalS.classList.toggle("hideS");
  fadeS.classList.toggle("hideS");
};

openModalButtonS.addEventListener("click", toggleModalS);
closeModalButtonS.addEventListener("click", toggleModalS);

/*Modal 4*/ 
const openModalButtonE = document.querySelector("#open-modalE");
const closeModalButtonE = document.querySelector("#close-modalE");
const modalE = document.querySelector("#modalE");
const fadeE = document.querySelector("#fadeE");

const toggleModalE = () => {
  modalE.classList.toggle("hideE");
  fadeE.classList.toggle("hideE");
};

openModalButtonE.addEventListener("click", toggleModalE);
closeModalButtonE.addEventListener("click", toggleModalE);

document.querySelectorAll('.topics').forEach(button => {
  button.addEventListener('click', function() {
      var selectedTopic = this.textContent.trim();
      sessionStorage.setItem('selectedTopic', selectedTopic);
      window.location.href = '../Cadastro/cadastro.html'; // Redirect to the sign-up page
  });
});




