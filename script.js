  let calculation=JSON.parse(localStorage.getItem('calculation')) || '';
   displayCalc();


     function updateCalculation(value){
       calculation+=value;
       localStorage.setItem('calculation',JSON.stringify(calculation));
       displayCalc();
     }

     function calcFinal(){
      calculation=eval(calculation);
       localStorage.setItem('calculation',JSON.stringify(calculation));
      displayCalc();
     }
     
     function displayCalc(){
      const calc=document.querySelector('.display-calculation');
      calc.innerText=calculation;
     }
      function clearCalc(){
      calculation='';
      localStorage.removeItem('calculation');
      displayCalc();
    }