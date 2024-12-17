updateView();
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <button onclick="printNumbers()">Print numbers</button>
    <div id="numbers"></div>
    `
}

function printNumbers(){
    let stopValue = 10;
    let counter = 0;
    for(let i = 1; i <= stopValue; i++){
        counter = i *2;
        
        document.getElementById('numbers').innerHTML += '<li>'+ counter +'</li>';
        
    }
}