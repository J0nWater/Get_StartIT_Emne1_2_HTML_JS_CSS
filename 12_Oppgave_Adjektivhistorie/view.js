updateView();
function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <h1>Adjektivhistorie</h1>
    <p>
        During the (1)<ins>${chosenAdjective1}</ins> afternoon,
        a (2)<ins>${chosenAdjective2}</ins> squirrel tried to steal
        a (3)<ins>${chosenAdjective3}</ins> pizza slice from a picnic,
        but got chased away by a (4)<ins>${chosenAdjective4}</ins> pigeon.<br>
        The end.
    </p>    

    <h4>Adjective choices:</h4>
    <ol>
        <div class="adjContainer">
            <li >
                <div class="box">
                    <div class="item" onclick="setField('sunny', '1')">sunny</div>
                    <div class="item" onclick="setField('rainy', '1')">rainy</div>
                    <div class="item" onclick="setField('chaotic', '1')">chaotic</div>
                </div>
            </li>
            <li>
                <div class="box">
                    <div class="item" onclick="setField('sneaky', '2')">sneaky</div>
                    <div class="item" onclick="setField('confused', '2')">confused</div>
                    <div class="item" onclick="setField('daring', '2')">daring</div>
                </div>
            </li>
            <li>
                <div class="box">
                    <div class="item" onclick="setField('giant', '3')">giant</div>
                    <div class="item" onclick="setField('cheesy', '3')">cheesy</div>
                    <div class="item" onclick="setField('leftover', '3')">leftover</div>
                </div>
            </li>
            <li>
                <div class="box">
                    <div class="item" onclick="setField('fearless', '4')">fearless</div>
                    <div class="item" onclick="setField('hungry', '4')">hungry</div>
                    <div class="item" onclick="setField('annoyed', '4')">annoyed</div>
                </div>
            </li>
        </div>    
    </ol>
        `
}

