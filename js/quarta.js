/*

class Validator {

    constructor() {
      this.validations = [
        'data-min-length',              //parte 2 
        'data-email-validate',
        'data-max-length',
        'data-required',
        'data-only-letters',
        'data-password-validate',
        'data-equal'
      ]
    }

validate(form) {

    //pegar os inputs
    let inputs = form.getElementsByTagName('input');

   
 

    //HTMLCollections -> array 
    let inputsArray = [...inputs];


    // loop nos inputs e valicacoes mediante ao que for encontrado - - 1    começa aqui a parte 3
    inputsArray.forEach(function(input){
        console.log(input)  //depois que mostrar, apagar console log
   
   
        //loop  em todas as validaçoes existentes   - parte 3
        for(let i = 0; this.validations.length > i; i++) {
          //verifica se a validação atual existe o input
          if(input.getAttribute(this.validations[i]) !=null){
            
          };
        }

   
      }, this) ;                                  // parte 2

 
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
        'data-min-length',              
      
      ]
    }

validate(form) {

    //pegar os inputs
    let inputs = form.getElementsByTagName('input');

   
 

    //HTMLCollections -> array 
    let inputsArray = [...inputs];


    // loop nos inputs e valicacoes mediante ao que for encontrado - 
    inputsArray.forEach(function(input, objs){
        console.log(input)  //depois que mostrar, apagar console log     
   
   
        //loop  em todas as validaçoes existentes   ----------------------------parte 1 começa aqui a parte 4
        for(let i = 0; this.validations.length > i; i++) {
          //verifica se a validação atual existe o input
          if(input.getAttribute(this.validations[i]) !=null){
            
            // limpando string para virar um metodo
            let method = this.validations[i].replace('data-','').replace('-','');
          
            //valor do input 
            let value = input.getAttribute(this.validations[i]);
        
            // invocar o metodo
            this[method](input,value);
          };
        }

   
      }, this) ;                                  

 
}


//funcoes de validação ------------------------- parte  2    
// verifica se um input tem um numero minino de caracteres   
minlength(input, minValue){    

    let inputLength = input.value.length;

    let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;

    if (inputLength < minValue){
        console.log(errorMessage);
    }


}

// metodo imprime no formulario a mensagem de erro  - parte 3 
printMessage(input, msg){
    let template = doccument.querySelector('.error-validation').cloneNode(true);

    template.textContent = msg;

    let inputParent = input.parentNode;
    
    template.classListe.remove('template');

    inputParent.appendChild(template);

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