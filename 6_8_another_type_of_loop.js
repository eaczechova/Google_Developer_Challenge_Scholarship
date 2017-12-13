/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];
// var newTest = [];

// test.forEach(function(num) {
//     if (num%3 === 0) {
//         num = num + 100;
//     }
//     newTest.push(num);
// });

// test = newTest;

// console.log(test);

test.forEach(function(element, index){

    if (element % 3 === 0){
      test[index] +=100;
    }
    console.log(test);
});
