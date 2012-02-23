function fib(n) {
  if (n < 2)
    return 1;
  var i = fib(n - 1);
  var j = fib(n - 2);
  return i + j;
}
