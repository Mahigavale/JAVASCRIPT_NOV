
/**
 *  10=>
 *  first 100 prime numbers sum=> 
 *   24133
 */


/** 
 * 2,3,5,7,11
 */


var counter = 0;
var sum = 0;
for (v = 2; v < 1000; v++) {
    var flag = false;
    for (j = 2; j < v; j++) {
        if (v % j == 0) {
            flag = true;
        }
    }
    if (!flag) {
        sum = sum + v;
        counter++;
        console.log(v);
    }
    if (counter == 144) {
        break;
    }
}
console.log("Total Prime numbers:" + counter);
console.log("first 100 summation:" + sum);

