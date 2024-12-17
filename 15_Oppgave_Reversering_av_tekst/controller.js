function reversText(){
    for(let i = userInput.length; i >= 0; i--){
      reversed += userInput.charAt(i);
        console.log('input ->', reversed)
    }
    updateView()
  
}

function textInput(inputValue){
    userInput = inputValue;
}