function addi(number1: number, callback: (num :number)=>number) {  //(num :number)=>number : you have to treat this whole as the datype of the function
  callback(6);
  return number1;
}

// when you pass a callback function you basically pass a function saying that hey `addi` 
//I am passing you the arrow function with it's
// functionality defined you can use just the way you use other variables 
// Here but we have also specified what type raw structure(num :number)=>number YOU CAN ALSO SAY DATAYPE OF THE FUNCTION) of the function whilch `addi` will accept and it 
// is a good practice to do so
console.log(
  addi(3, (num: number):number => {
    console.log(num + 2);
    return num;
  }),
);
