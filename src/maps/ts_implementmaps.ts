function addi(number1: number, callback: (num :number)=>number) {  //(num :number)=>number : you have to treat this whole as the datype of the function
  callback(6);
  return number1;
}

// when you pass a callback function you basically pass a function saying that hey `addi` 
//I am passing you the arrow function with it's
// functionality defined you can use just the way you want to use it 
// Here but we have also specified what type of function does addi expect in input.
console.log(
  addi(3, (num: number):number => {
    console.log(num + 2);
    return num;
  }),
);
