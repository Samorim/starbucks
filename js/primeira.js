//--validação 1 - dispara validações pelo clicke no cadastrar//

let form = document.getElementById('register-form');
let submit = document.getElementById('btn-submit');
  
     
  // evento de envio do form, que valida os inputs 
  submit.addEventListener('click', function(e) {
    e.preventDefault();
  
    console.log("funcionou!")
  }); 








