updateView()
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <h2>Antall vokaler teller</h2>
    <input onchange="textInput(this.value)" placeholder="enter text"><br>
    <button onclick="countVocals()">Submit</button>
    <br><br>
    <span>Vokaler:</span>
    <div>a = ${aCounter}</div>
    <div>e = ${eCounter}</div>
    <div>i = ${iCounter}</div>
    <div>o = ${oCounter}</div>
    <div>u = ${uCounter}</div>
    <div>y = ${yCounter}</div>
    <div>æ = ${æCounter}</div>
    <div>ø = ${øCounter}</div>
    <div>å = ${åCounter}</div>   
    `
}