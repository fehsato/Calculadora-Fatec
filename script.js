function somar(){
    var num1, num2, resp;
    //ParseFloat(transformar string em número) O Floar é para números décimais, para números inteiros é int//
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat( document.getElementById("num2").value);
    
    resp = num1 + num2;

    document.getElementById("resp").value = resp;
}

function subtrair(){
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat( document.getElementById("num2").value);

    resp = num1 - num2;

    document.getElementById("resp").value = resp;
}

function multiplicar(){
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat( document.getElementById("num2").value);

    resp = num1 * num2;

    document.getElementById("resp").value = resp;
}

function dividir(){
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat( document.getElementById("num2").value);

    resp = num1 / num2;

    document.getElementById("resp").value = resp;
}

function apagar(){
    num1 = parseFloat(document.getElementById("num1").value='');
    num2 = parseFloat(document.getElementById("num2").value='');
    resp = parseFloat(document.getElementById("resp").value='');
    
   
}