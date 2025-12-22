
let arr = [111, 13, 27, 61, 33, 59, 34, 56, 131];



console.log(Object.groupBy(arr, checkprime).Composite);


function checkprime(i) {
    let flag = false;
    for (v = 2; v < i; v++) {
        if (i % v == 0) {
            flag = true;
        }
    }
    if (flag == false) {
        return "prime";
    }
    else {
        return "Composite";
    }
}