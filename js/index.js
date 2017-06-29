var n = Number(prompt('enter your n'));
var fib = [1, 1];
document.write('n-ne fib  = ' + fib (n));
function fib(n) {
    for (var i = 1; i < n - 1; i++) {
        fib.push(fib[i] + fib[i - 1]);
    }
    return fib(n - 1) + fib(n - 2)}

