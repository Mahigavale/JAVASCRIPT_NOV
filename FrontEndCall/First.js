



function login()
{

const token=btoa("ABC:ABC@123");

console.log(token);


localStorage.setItem("auth",token);

}


async function  getdata1() {

    const data= await fetch("http://localhost:8080/get-users",{

        method:"GET",
        headers:
        {
            "Authorization":`Basic ${localStorage.getItem("auth")}`
        }
    }).then((v)=>
    {
         return v.json();
        
    }).then((v)=>
    {
        console.log(v);
        
    })


    
}



function getdata()
{
setTimeout(()=>{
    getdata1();
},5000)
}


function logout()
{
    localStorage.removeItem("auth")
}