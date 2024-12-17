updateView()
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <h2>Reversing the text</h2>
    <input type="text" onchange="textInput(this.value)" placeholder="enter text"><br>
    <button onclick="reversText()">submit</button>
    <br><br>
    <div>Text: ${reversed}</div>
    `
}