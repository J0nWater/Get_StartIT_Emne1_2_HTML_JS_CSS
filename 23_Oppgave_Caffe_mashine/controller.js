//show coffe mashine drinks list
function showDrinks(){
    drinksList = '';
    for(let i = 0; i < drinks.length; i++){
        drinksList += /*HTML*/`
       <li onclick="selectDrink(${i})">${drinks[i].name} - ${drinks[i].price}kr</li>
       `;
    }
    return drinksList
}
//select drinks from list
function selectDrink(index){
    selectedDrinksArray.push(drinks[index]);
    calculatePrice()
    updateView()
}
//show selected drinks
function drawSelectedDrinks(){
    let html = '';
    selectedDrinksNameText = '';
    for( let i = 0; i < selectedDrinksArray.length; i++){
        html += `<div onclick="removeDrink(${i})">${selectedDrinksArray[i].name}&emsp;(remove)</div>`
        selectedDrinksNameText += `<div>${selectedDrinksArray[i].name}</div>`
    }
    return html;
}
//calculate total price of selected drinks
function calculatePrice(){
    totalPrice = 0;
    errorAnswer = '';
    for(let i = 0; i < selectedDrinksArray.length; i++){
        totalPrice += selectedDrinksArray[i].price;
    };
    return totalPrice;
}
//remove drinks from selected drinks list
function removeDrink(index){
    selectedDrinksArray.splice(index, 1)
    calculatePrice()
    updateView()
}
//calculating the cash balance and the price of selected drinks
function count(){
    if(money < totalPrice){
        errorAnswer = 'Not enough money';
    } 
    else {
        money -= totalPrice;
        boughtList += selectedDrinksNameText;
        answer = `
        <h3>You bought:</h3>
        <ul>${boughtList}</ul>
        `;
        selectedDrinksArray = []
        totalPrice = 0;
    }
    updateView()
}