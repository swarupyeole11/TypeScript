let num1: number[] = [2, 2, 2, 4]; //By default arrays are dynamic in typescript to make it of one type you can specify the type of input array
let num2: any[] = [1, '2', 2];
function arrays(Oarr1:any[] , Oarr2:number[] ,callback: (arr1: number[], arr2: any[]) => any[]) {
   let outputarr= callback(Oarr1,Oarr2)
    {
        console.log(Oarr1);
    }
   
    console.log(outputarr);
    
}

arrays(num1,num2,(v1, v2) => {
 let v3 = v1.concat(v2)
 return v3
});
