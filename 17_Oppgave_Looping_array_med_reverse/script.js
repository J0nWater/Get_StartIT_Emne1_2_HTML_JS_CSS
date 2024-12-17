let pocketStuff = ['Hat', 'Pencil', 'Dinosaur', 'Showercap', 'Piece of Tape'];
let reversedStuff = [];

updateView()
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <button onclick="seeWhatInPockets()">See Contents of Pockets!</button>
    <div>${reversedStuff}</div>
    
    `;
}
function seeWhatInPockets(){
    for(let i = pocketStuff.length -1; i >= 0;  i--){
        let valueAtIndex = pocketStuff[i]
        reversedStuff.push(valueAtIndex)
        
        console.log(`På runde ${i} in loopen så ser jeg: ${pocketStuff[i]}`) 
    }
    updateView()
}

