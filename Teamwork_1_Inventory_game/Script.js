// function trykk(tagElement, frukt1, frukt2, frukt3, frukt4) {
//     if (document.getElementById(frukt1).innerHTML == " ") {
//         document.getElementById(frukt1).innerHTML =
//         tagElement.innerHTML;
//         tagElement.innerHTML = " ";
//     }
//     else if (document.getElementById(frukt1).innerHTML == " ") {
//         document.getElementById(frukt2).innerHTML =
//         tagElement.innerHTML;
//         tagElement.innerHTML = " ";
//     }
//     else if (document.getElementById(frukt1).innerHTML == " ") {
//         tagElement.innerHTML;
//         tagElement.innerHTML = " ";
//     }
//     else if (document.getElementById(frukt4).innerHTML == " ") {
//         document.getElementById(frukt4).innerHTML = 
//         tagElement.innerHTML;
//         tagElement.innerHTML = " ";
//     }
// }


function trykk(id) {
    document.getElementById('item').innerHTML += document.getElementById(id).innerHTML;
}

function tabort(id) {
    const element = document.getElementById("item");
    element.remove();
}

