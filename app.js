function fizzBuzz(countTo) {
    var fizzBuzzArray = [];
    for (i = 1; i <= countTo; i++) {
        if (i % 15 === 0) {
            fizzBuzzArray.push("fizzbuzz")
        } else if (i % 3 === 0) {
            fizzBuzzArray.push("fizz");
        } else if (i % 5 === 0) {
            fizzBuzzArray.push("buzz");
        } else {
            fizzBuzzArray.push(i);
        }
    }
    return fizzBuzzArray;
}







/* From here down, you are not expected to
   understand.... for now :)


   Nothing to see here!

*/



// tests
(function testFizzBuzz() {
    // we'll use the variables in our test cases
    var countTo = 16;
    var expected = [
        1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz',
        'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16
    ];

    var actual = fizzBuzz(countTo) || [];

    if (
        expected.length === actual.length &&
        expected.every(function (item, index) {
            return actual[index] === item;
        })) {

        console.log('SUCCESS: fizzBuzz is working');
    } else {
        console.log('FAILURE: fizzBuzz is not working');
    }
})();
