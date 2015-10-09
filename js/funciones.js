function factorial_for (){
    var num = prompt('Numero a calcular', '5'),
        factorial = 1;

    for(i=2; i<=num; i++){
        factorial *= i;
    }

    alert('Factorial de: '+ num + ' es: '+ factorial);
}

var factorial_while = function (){
    var num = prompt('Numero a calcular', '5'),
        factorial = 1,
        i = 2;

    while(i<=num){
        factorial *= i++;
    }

    alert('Factorial de: '+ num + ' es: '+ factorial);
}
