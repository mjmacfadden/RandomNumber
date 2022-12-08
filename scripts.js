function chooseNumber() {
    var x = Math.floor((Math.random() * 20) + 1);
    document.getElementById("number").innerHTML = x;
}