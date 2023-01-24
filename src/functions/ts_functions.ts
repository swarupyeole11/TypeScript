
// In typescript you exactly define what input parmeter you want and what you will do with it 
function calculateTax(salary : number , taxyear=2022) : number
{
   if(salary>500000 && taxyear>2021)
   {

     return (salary-500000)*0.1
   }
   return 0;
}


function calculateTax2(salary : number , taxyear? : number) : number
{
   if(salary>500000 && (taxyear||2022)>2021)
   {
     return (salary-500000)*0.1
   }
   return 0;
}

console.log(calculateTax(6000000));
