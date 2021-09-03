document.getElementById("submit").addEventListener("click", function () {
var input = document.getElementById("input").value;
var input2 = document.getElementById("input2").value;
var input3 = document.getElementById("input3").value;

var buyAmount = input * input2;
var sellAmount = input3 * input2;
var Amount = sellAmount - buyAmount;

if(Amount<0){
    var loss = Amount / buyAmount * 100 ;
    document.getElementById("Id0").innerHTML = 0;
    document.getElementById("Id1").innerHTML = 0;
    document.getElementById("Id2").innerHTML = Amount;
    document.getElementById("Id3").innerHTML = loss;
    document.getElementById("remaining").innerHTML = "&#x1f641;";
}

if(Amount>=0){
    var profit = Amount / buyAmount * 100 ;
    document.getElementById("Id0").innerHTML = Amount;
    document.getElementById("Id1").innerHTML = profit;
    document.getElementById("Id2").innerHTML = 0;
    document.getElementById("Id3").innerHTML = 0;
    document.getElementById("remaining").innerHTML = "&#x1f604;";
    document.getElementById("body").style.background = 'white';
}


var loss = Amount / buyAmount * 100 ;

if(loss <= -50){
    var loss = Amount / buyAmount * 100 ;
    document.getElementById("Id0").innerHTML = 0;
    document.getElementById("Id1").innerHTML = 0;
    document.getElementById("Id2").innerHTML = Amount;
    document.getElementById("Id3").innerHTML = loss;
    document.getElementById("remaining").innerHTML = "&#x1f641;&#x1f641;&#x1f641;";
    document.getElementById("body").style.background = '#eee34e';
}

})