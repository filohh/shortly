const btnEl = document.getElementById('menu-btn');
const menuEl = document.getElementById('menu');
console.log('btn', btnEl);
const errMsgEl = document.getElementById('err-msg');
const inputEl = document.getElementById('link-input');
const formEl = document.getElementById('link-form');

btnEl.addEventListener('click', navToggle);
formEl.addEventListener('submit', formSubmit);
// Toggle Mobile Menu
function navToggle(){
  btnEl.classList.toggle('open');
  menuEl.classList.toggle('flex');
  menuEl.classList.toggle('hidden');
}

// Validate URL
function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}
function formSubmit(e) {
  e.preventDefault();
  
  if(inputEl.value === ''){
    errMsgEl.innerHTML = "Favor informar o link";
    inputEl.classList.add('border-red');
  } else if(!validURL(inputEl.value)) {
    errMsgEl.innerHTML = "Favor informar um endereço URL válido";
    inputEl.classList.add('border-red');
  } else {
    errMsgEl.innerHTML = "";
    inputEl.classList.remove('border-red');
  }
}