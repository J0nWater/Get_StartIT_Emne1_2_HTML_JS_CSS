updateView()

function updateView(){
    html.innerHTML = /*HTML*/`
    <h3>Pocket: ${money}kr</h3>

    <h4>Choose your drink:</h4>
    ${showDrinks()}

    <h3>Total Price: ${totalPrice}kr &emsp;
        <span style="color: red;">${errorAnswer}</span>
    </h3>
    <ul>${drawSelectedDrinks()}</ul>
    
    <button onclick="count()">Buy</button>
    ${answer}
    `;
}

