let employee: {
  readonly name: string; // the readonl variable function makes the f
  faxnum?: number; //? makes the value to passed as optional
  retire: (age: number) => void;
  PhNum: number
} = {
    name: 'Hello',
    //providing the structure of the function
    retire: function (age: number): void {
        if (age > 60)
            console.log("the employtee has to retire");
    },
    PhNum: 79879_67989
};


employee.retire(70)

