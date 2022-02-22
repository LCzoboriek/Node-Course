function product(num1, num2, callback){
    var result = num1 * num2
    callback(result)
}

// function print(result) {
//     console.log(result);
// }

product(37, 4, function(result){
    console.log(result);
});