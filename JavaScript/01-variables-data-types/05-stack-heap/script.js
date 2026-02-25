// values are stored on the stack
const name ='Yisma';
const age = 30;

// Reference Values are stored on the heap
const person = {
  name: 'Yisma',
  age: 40
};

let newName = name;
newName = 'Temu';

let newPerson = person;
newPerson.name = 'Achu';


console.log(name,newName);
console.log(person, newPerson);