
//union allows the datatype to be either number or string here 
function kgtoLbas(weight: number | string): number {
  if (typeof weight === 'number') {
    weight = weight * 0.2;
    return weight;
  } else {
    return parseInt(weight)*2.2
  }
}

//interesction in typescript 

type Draggable = {
   drag : ()=>void
} 

type Resizeable = {
    resize : ( num2 : number ,num?:number)=>number
}

type UIWidget = Draggable & Resizeable

let textBox : UIWidget =
{
    drag : ()=>console.log("jej"),
    resize : (num)=>num*4
}

console.log(textBox.resize(4));


//Type literals 

type PlayDate = 50 | 100 | 150 | string
let PlayDate1 : PlayDate = "Hello" //this implies the variable can have the values mentioned in the type playdate only

//Just Like types there are interfaces the biggest benefits of using interfaces is that you can reopen the interface after it's declatration unlike the type 
