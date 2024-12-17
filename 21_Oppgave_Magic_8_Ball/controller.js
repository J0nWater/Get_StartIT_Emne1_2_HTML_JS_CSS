function getRandomAnswer(){
   let newIndex = Math.floor(Math.random() * ballAnswer.length)
   
   while (ballAnswer[newIndex] === lastAnswer) {
      newIndex = Math.floor(Math.random() * ballAnswer.length);
   }
   randomAnswer = ballAnswer[newIndex];
   lastAnswer = newIndex;
   
   updateview();
   changeClass()

}

function changeClass() {
   document.getElementById("number8").classList.toggle('text')
}