var n = Number(prompt('enter your n'));
var fib= [];
fib[0]=1;
fib[1]=1;
function fibonacci(n){ for( var i=2; i<n; i++){
    fib[i]= fib[i-1]+ fib[i-2];
}
    return fib[n-1];
}

document.write(fibonacci(n)); 





























// var fib = [1, 1];
// document.write('n-ne fib  = ' + fib (n));
// function fib(n) {
//     for (var i = 1; i < n - 1; i++) {
//         fib.push(fib[i] + fib[i - 1]);
//     }
//     return fib(n - 1) + fib(n - 2)}

