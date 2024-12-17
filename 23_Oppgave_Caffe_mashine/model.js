const html = document.getElementById("app");
let money = 200;
let drinks = [
    {
        name: "Tea", 
        price: 20
    }, 
    {
        name: "Coffee",
        price: 30
    },
    {
        name: "Late",
        price: 40
    },
    {
        name: "Americano",
        price: 52
    },
    {
        name: "Moca",
        price: 25
    },
    {
        name: "Cacao",
        price: 23
    },
]
let drinksList = '';
let selectedDrinksArray = []
let totalPrice = 0;
let errorAnswer = '';
let answer = '';
let selectedDrinksNameText = '';
let boughtList = '';