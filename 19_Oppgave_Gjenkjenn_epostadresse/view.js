updateView()
function updateView(){
    html.innerHTML = /*html*/`
    <h2>Recognize email address</h2>
    <input type="text" onchange="textInput(this.value)" placeholder="enter email">

    <br><br>
    <div>${emailStatus}</div>
    `;
}