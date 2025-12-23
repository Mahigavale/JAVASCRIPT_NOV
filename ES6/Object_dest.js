

let Employee=
{
    name:"John doe",
    profession:"Professional",
    email:undefined,
    city:"Pune"
}

Object.freeze(Employee);

let {name,city,email="hurray@gmail.com",profession,state="maharashtra"}=Employee;

console.log(Employee['name']);
console.log(Employee.name);
console.log(name);
console.log(city);
console.log(email);

console.log(state);
console.log(Employee);





