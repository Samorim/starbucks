// começa assim 

/*
class Validator {

    constructor() {
      this.validations = [
        
      ]
    }

validate(form) {

    //pegar os inputs
    let inputs = form.getElementsByTagName('input');

    console.log(inputs);       
 

    //HTMLCollections -> array 
    let inputsArray = [...inputs];

    console.log(inputsArray);  // depois de ter mostrado que o array no f12, apagar os consolelog

}


}

//---//
let form = document.getElementById('register-form'); 
let submit = document.getElementById('btn-submit');  


let validator = new Validator();    
     
  // evento de envio do form, que valida os inputs 
  submit.addEventListener('click', function(e) {
    e.preventDefault();
  
    validator.validate(form);   
  }); 


 


  */


  class Validator {

    constructor() {
      this.validations = [
        'data-min-length',              //parte 2 -2
        
      ]
    }

validate(form) {

    //pegar os inputs
    let inputs = form.getElementsByTagName('input');

   
 

    //HTMLCollections -> array 
    let inputsArray = [...inputs];


    // loop nos inputs e valicacoes mediante ao que for encontrado - - 1    começa aqui a parte 3
    inputsArray.forEach(function(input){
          
   
        //loop  em todas as validaçoes existentes   - parte 3
        for(let i = 0; this.validations.length > i; i++) {
          //verifica se a validação atual existe o input
          if(input.getAttribute(this.validations[i]) !=null){
            console.log('achou validação');
            console.log(input.getAttribute(this.validations[i]))
          };
        }

   
      }, this) ;                                  // parte 2-1

 
}


}

//---//
let form = document.getElementById('register-form'); 
let submit = document.getElementById('btn-submit');

let validator = new Validator();    
     
  // evento de envio do form, que valida os inputs 
  submit.addEventListener('click', function(e) {
    e.preventDefault();
  
    validator.validate(form);   
  }); 