updateView()
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <h2>Handlevogn</h2>
    <span>Enter product name:</span>
    <input type="text" onchange="userInput(this.value)" placeholder="enter product name">
    <button onclick="addToChartFromInput()">add to cart</button><br>
    <br>
    <div>Or select from the list of products:<br>${printStore()}</div>
    <br>
    <div>Cart:<br>${addToChartFromInput()} </div>
    `;
}