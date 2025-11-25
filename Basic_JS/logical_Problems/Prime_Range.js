
// 30, 70
// 31,37,41,43,47,53,59,61,67

let num1 = 30;
let num2 = 70;

let sum=0;
for (let v = num1 + 1; v < num2; v++) {

    let flag = false;

    for (let v1 = 2; v1 < v; v1++) {
        if (v % v1 == 0) {
            flag = true;
        }

    }
    if(!flag)
    {    sum=sum+v;
        console.log("Prime:",v);
        
    }

}

console.log("Sum of the prime numbers is:"+sum);
