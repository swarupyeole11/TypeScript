//USE Camelcase for using type 

type Employees = {
    readonly name: string; // the readonly  makes variable readonly 
    faxnum?: number; //? makes the value to passed as optional
    retire: (age: number) => void;
    PhNum: number
}

let employees : Employees = {
      name: 'Hello',
      retire: function (age: number): void {
          if (age > 60)
              console.log("the employtee has to retire");
      },
      PhNum: 79879_67989,
      faxnum: 234_234
  };
  