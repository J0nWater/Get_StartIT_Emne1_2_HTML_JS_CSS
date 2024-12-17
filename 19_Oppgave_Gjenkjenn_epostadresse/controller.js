function checkText(){
    for(let i = 0; i < userInput.length; i++){
        let thisSign = userInput.charAt(i);
        
        console.log('index sign -->', thisSign)

        if(thisSign == '@'){
            aSign = true;
        }
        if(thisSign == '.'){
            dotSign = true;
        }
        if(thisSign == ' '){
            spaceSign = true;
        }
        console.log('@ sign', aSign)
        console.log('dot sign', dotSign)
        console.log('space sign', spaceSign)
    }
    if(aSign == true && dotSign == true && spaceSign != true){
        emailStatus = true;
    }
    else{
        emailStatus = false;
    }
    console.log('email status -->', emailStatus)
    updateView()
    aSign = false
    dotSign = false
    spaceSign = false
}

function textInput(inputValue){
    userInput = inputValue;
    console.log('entered text -->', userInput)
    checkText()
}

function checkStatus(){
}