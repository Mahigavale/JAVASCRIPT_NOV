
/**
 * {
    "userName":"Sakshi Mohite",
	"userEmail":"mohitesakshi168@gmail.com",
	"userPassword":"Anjali@123",
    "userRoles":
    ["ROLE_USER"]
}
 */

const City=
{
    name:"Pune",
    population:1400000,
    pincode:"131212",
    getinfo:function()
    {
          console.log(this.name+" "+this.population+" "+this.pincode);
          
    }
}

//you can change the property values.
City.name="Mumbai";

//you can add the new Properties.
City.commisonner="Silva IPS"
City['mayor']="Mohol";
City.getinfo();

console.log(City);


console.log(City);


console.log("*************");

  for(v in Object.values(City))
  {
   console.log(v);
   
  }





