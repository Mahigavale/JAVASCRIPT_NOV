

let Student={
    name:"John",
    email:"John@gmail.com",
    city:"Pune"
}

  
let arr2=[["city","pune"],["city","pune"],["city1","121212"],["population","12345"]];



console.log(Object.fromEntries(arr2));



        // let arr=[[["ad","cd"]],[[23,45]]];

        // arr.forEach((i)=>{
        //     console.log(Object.fromEntries(i));
            
        // });



       console.log(
         Object.entries(Student));