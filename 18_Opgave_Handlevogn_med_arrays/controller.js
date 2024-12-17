function printStore(){
    let productList = '';
    for( let i = 0; i < productListArray.length ; i++ ){
        productList += /*html*/`<div onclick="addToChartFromList(this.innerHTML)"
        >${productListArray[i]}</div>`; 
    }
    return productList
}

function addToChartFromList(productValue){
    cart.push(productValue);    
    console.log('cart -->', cart);
    updateView()

}

function addToChartFromInput(){   
    let productName = ''; 
    for(let i = 0; i < cart.length; i++){
        productName += `<div>${cart[i]}</div>`;
    }
    return productName
}

function userInput(inputValue){
   
    
    cart.push(inputValue);
    console.log('cart -->', cart)
    updateView();
}
