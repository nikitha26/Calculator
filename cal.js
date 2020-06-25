function number(val) {
    document.getElementById("txtfield").value+=val;
}

function solve()
{
let x = document.getElementById("txtfield").value
let y = eval(x)
document.getElementById("txtfield").value = y
}
function clr(){
    document.getElementById('txtfield').value = " "
}


