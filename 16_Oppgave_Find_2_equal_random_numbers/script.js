let randomNum1 = '*';
let randomNum2 = `*`;
let text = '';

updateView()
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <h2>Find 2 equal random numbers</h2>
    <div>Press F12 on the keyboard, then open /console</div><br>
    <button onclick="findRandom()">Find numbers</button>
    <div style="font-size: xx-large;">${randomNum1} = ${randomNum2}</div>
    <span style="color: red; font-size: x-large;">${text}</span>
    `
}

function findRandom(){
    randomNum1 = getRandomNumber()
    randomNum2 = getRandomNumber()   
    console.log('random numbers-->', randomNum1, randomNum2)
    checkNumbers()
}
function getRandomNumber(){
    return Math.floor(Math.random()*11);
}
function checkNumbers(){
    while(randomNum1 !== randomNum2){
        findRandom()
        if(randomNum1 == randomNum2){
            text = 'Equal numbers found!!!😎'
        }
    }    
    updateView()
}

