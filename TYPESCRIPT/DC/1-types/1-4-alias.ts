{
    /*
    Type Aliases
     */
    type Text = string;
    const name: Text = 'sh';
    const address: Text = 'hwa';
    type Num = number;
    type Student = {
        name: string,
        age: number;
    }
    const student: Student = {
        // animal: 'dog' error 발생
        name: 'ellie',
        age: 12,
    };

    /*
    String Literal Types
    */
   type Name = 'name';
   let ellieName: Name;
   ellieName = 'name';
   type JSON = 'json';
   const json:JSON = 'json';

   type Boal = true;
//    const isCat: Boal = false; 에러 발생
   const isCat: Boal = true;
   
}