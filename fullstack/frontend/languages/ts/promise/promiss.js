var sarnyasPromiss = new Promise(function (resol, notresol) {
    //resol('promiss fullfilled')
    notresol('not resolved');
});
sarnyasPromiss.then(function (a) { console.log(a); });
sarnyasPromiss["catch"](function (a) { console.log(a); });
console.log(sarnyasPromiss);
