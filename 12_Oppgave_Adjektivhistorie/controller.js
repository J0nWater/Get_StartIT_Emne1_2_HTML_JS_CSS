function setField(adjective, blockNum){
    if(blockNum == '1'){
        chosenAdjective1 = adjective
    }
    else if(blockNum =='2'){
        chosenAdjective2 = adjective
    }
    else if (blockNum == '3'){
        chosenAdjective3 = adjective}
    else if (blockNum == '4'){
        chosenAdjective4 = adjective
    }
    updateView();
}