function countVocals(){
    reset()
    for(let i=0; i<=userInput.length; i++){
        let thisLetter = userInput.charAt(i)
        if(thisLetter === 'a'){
            aCounter++;
        }
        else if(thisLetter === 'e'){
            eCounter++;
        }
        else if(thisLetter === 'e'){
            eCounter++;
        }
        else if(thisLetter === 'i'){
            iCounter++;
        }
        else if(thisLetter === 'o'){
            oCounter++;
        }
        else if(thisLetter === 'u'){
            uCounter++;
        }
        else if(thisLetter === 'y'){
            yCounter++;
        }
        else if(thisLetter === 'æ'){
            æCounter++;
        }
        else if(thisLetter === 'ø'){
            øCounter++;
        }
        else if(thisLetter === 'å'){
            åCounter++;
        }
    }
    updateView()
}

function textInput(inputValue){
    userInput = inputValue
    userInput = inputValue.toLowerCase();
    console.log('input ->', userInput)
}
function reset(){
    aCounter = 0;
    eCounter = 0;
    iCounter = 0;
    oCounter = 0;
    uCounter = 0;
    yCounter = 0;
    æCounter = 0;
    øCounter = 0;
    åCounter = 0;
}