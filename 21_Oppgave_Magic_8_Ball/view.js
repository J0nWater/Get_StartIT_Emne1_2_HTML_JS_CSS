updateview()
function updateview(){
    document.getElementById('app').innerHTML = /*html*/`

        <div class="ball" onclick="getRandomAnswer()">
            <div class="innerBall">
                <div id="number8" class="number8">${randomAnswer}</div>
            </div>
        </div>
        <div class="shadow"></div>
    
    `;
}