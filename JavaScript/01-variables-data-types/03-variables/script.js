//ways to decleare a variable
//var,let,const
let FirstName = 'Yisma';
let LastName = 'Temu';

console.log(FirstName,LastName);

let age = '20';

console.log(age);
//variable naming conventions
// only letters, numbers, underscores and dollar signs
// can't start with a number

// Multi-word Formatting
// firstName = camelCase
// first_name = underScore
// FirstName = pascalCase
// firstname = lowercase

//Re-assigning Variables
 age = 31;

 console.log(age);
 let score;
 score = 1;
 console.log(score);
 if(true){
    score = score + 1;
 }

 console.log(score);

 const x =100; // const can't re-assigned like x=200;
 //const score1; // error b/c 'const' declarations must be initialized.

 const arr = [ 1, 2, 3,4];
 //arr = [1,2,3,4,5]; //error for add 5 in arr
 arr.push(5);

 console.log(arr);

 const person = {
 name: 'Brad',
 };
 person.name='Yisma';

 person.email = 'yismalemt@gmail.com';

 console.log(person);

 // Declare multiple values at once
 let a,b,c;

 const d=5, e=10,f=15;

 console.log(f);


 