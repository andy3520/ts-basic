function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if (resultConversion === 'as-number') {
    //   return +result;
    // } else {
    //   result = result.toString();
    // }
    return result;
}
var combineAges = combine(20, 4, 'as-number');
var combineStringAges = combine('20', '4', 'as-number');
var combineNames = combine('Max', 'Leaf', 'as-text');
console.log(combineAges, combineStringAges, combineNames);