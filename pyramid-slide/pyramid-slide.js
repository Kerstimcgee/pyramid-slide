
function switchSymbol() {
    console.log(getCurrentSymbol());
}

function getCurrentSymbol () {
    var symbol = document.getElementById("brick-symbol");
    var symbolTaker = symbol.options[symbol.selectedIndex].value;
    return symbolTaker
}

function drawPyramid() {
    document.getElementById("pyramid").innerHTML ="";
    
    // this is drawing using the actual int value
    var pyramidSize = document.getElementById("slider-adjusted").value;
    while (pyramidSize.firstChild) 
        pyramidSize.removeChild(pyramidSize.firstChild);
    
    console.log(pyramidSize);
    // for each row....
    inputValue = getCurrentSymbol()
    console.log(inputValue)
    for (let line = "slider-adjusted"; 
    line.length < pyramidSize; line += switchSymbol());

    for (var row = 0; row < pyramidSize; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = pyramidSize - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += "";
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += inputValue;
        //console.log (drawPyramid(slider-adjusted));
        }
        console.log("it got to line 35")

        //create a text element with the string of characters
        textElem = document.createTextNode(rowStr);
        console.log(textElem)

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
         
    }      
}
drawPyramid()
//add slider and event listener

