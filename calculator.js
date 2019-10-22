// Button on Click
function btnClick(a) {
    calcForm.display.value += a;
}

// Numbers on Key Press
let display = document.getElementsByClassName('display');
document.body.onkeypress = function numPress() {
    // Select keys 0-9
    for (var i = 0; i < 10; i++) {
        if (event.keyCode == i + 48) calcForm.display.value += i;
    }
    // var keys= ['+','-','x','/']
    // var keysLength = keys.length
    // for(i = 0; i < keysLength; i++) {

    // }
};


//Equals Function
function equalsTo() {
    calcForm.display.value = eval(calcForm.display.value);
}
// Return key onkeypress
// document.onkeypress = enter;
// function enter(e) {
//     if (e.which == 13) { equalsTo(); }
// }


// Reset/All Clear Function
function clearForm() {
    calcForm.display.value = "";
}
// // C Key to Clear
// document.onkeypress = allClear;
// function allClear(e) {
//     if (e.which || e.keyCode == 67) { clearForm(); }
// }

// Backspace Function
function backspace() {
    var preValue = calcForm.display.value;
    calcForm.display.value = preValue.substr(0, preValue.length - 1);
};



