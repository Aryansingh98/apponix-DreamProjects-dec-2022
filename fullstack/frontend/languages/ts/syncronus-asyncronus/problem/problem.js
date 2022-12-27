function finalbil() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var sum = a.reduce(function (a, b) { return a + b; }, 0);
    console.log(sum);
}
finalbil(100, 200, 300);
