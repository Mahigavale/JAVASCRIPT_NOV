

let arr3=[10,12,99,33,54,79,98];


/**
 * Higher order component/ Function.
 */

console.log(arr3.find(check) || "not found");



function check(i)
{
    return i>13;
}