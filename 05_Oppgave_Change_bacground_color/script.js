let colorSave = '';
let divSave = '';

showView();
function showView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <h2>Bytting av bakgrunnsfarge på nettleser</h2>
    <p>Select box</p>
    <div class="container1">
        <div id="box1" onclick="saveDiv('box1')"></div>
        <div id="box2" onclick="saveDiv('box2')"></div>
        <div id="box3" onclick="saveDiv('box3')"></div>
    </div>

    <p>Choose a color</p>

    <div class="container2">
        <div id="colorBox1" onclick="addBorder('green','colorBox1')"></div>
        <div id="colorBox2" onclick="addBorder('orange','colorBox2')"></div>
        <div id="colorBox3" onclick="addBorder('red','colorBox3')"></div>
    </div>
    <button onclick="addColor()">Add color</button>
    `
    
}
function saveDiv(id){
    divSave = id
    document.getElementById('box1').classList.remove('borderStyle')
    document.getElementById('box2').classList.remove('borderStyle')
    document.getElementById('box3').classList.remove('borderStyle')
    document.getElementById(id).classList.add('borderStyle');

}


function addColor(){
    document.getElementById(divSave).style.backgroundColor = colorSave;
    console.log(divSave)
}

function addBorder(color,id){
    colorSave = color;
    document.getElementById('colorBox1').classList.remove('borderStyle')
    document.getElementById('colorBox2').classList.remove('borderStyle')
    document.getElementById('colorBox3').classList.remove('borderStyle')
    document.getElementById(id).classList.add('borderStyle');
}


/*Oppgave - mer om variabler
Bytting av bakgrunnsfarge på nettleser eller valgt div v/klikk.

- Lag 3 eller flere div'er som representerer hver sin farge.
Disse skal brukes til å velge hvilken farge man setter på nettleserbakgrunenn eller div'en man velger.

- Lag en knapp som endrer hele bakgrunnsfargen i nettleseren til den fargen du har valgt.

- Lag deretter 2 eller flere tomme (men synlige) div'er.
Disse er de som skal klikkes på for å velges og da få den bakgrunnsfargen man har valgt fra fargedivene.

- Gjør det også synlig hvilken av disse div'ene som er valgt - ved f.eks å sette på en ramme.

Dette er en oppgave hvor du trenger å bruke variabler til å spare på valgene du har tatt, og koble disse sammen.

Ting som kan være lurt å sjekke ut:

.classList.remove()
.classList.toggle()
.classList.add()
Man kan skrive: ' divVariabel.style.detManVilStyle = "ny propertyverdi man vil ha" ' for å endre CSS i JavaScript.*/