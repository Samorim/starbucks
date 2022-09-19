//--validação 2   -     2 

class Validator {

    constructor() {
      this.validations = [
        
      ]
    }

//2 - ate aqui ^   

// iniciar a validacao de todos os campos //   - 5 
validate(form) {

    //pegar os inputs
    let inputs = form.getElementsByTagName('input');

    console.log(inputs);       // depois de ter mostrado que o array no f12, apagar os consolelog
 

    //HTMLCollections -> array 
    let inputsArray = [...inputs];

    console.log(inputsArray);  // depois de ter mostrado que o array no f12, apagar os consolelog

}


}
//-------------------------//

let form = document.getElementById('register-form');  // 1 - mantem esse e apaga o consolelog.
let submit = document.getElementById('btn-submit');
  
let validator = new Validator();    // 3 - 
     
  // evento de envio do form, que valida os inputs 
  submit.addEventListener('click', function(e) {
    e.preventDefault();
  
    validator.validate(form);   // - 4  
  }); 

