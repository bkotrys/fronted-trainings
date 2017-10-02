//
export { Person } from './main';

// variables
import './main2'

export default function Person(name, surname, gender = 'male') {
  name = name;
  this.name = name;
  this.surname = surname;
  this.creationTime = new Date();
  this.gender = gender;
  
  // this.male = gender !== undefined ? "male" : gender;

  this.fullname = function () {
    return this.name + " " + this.surname;
  }


  console.log("context person", this);

  document.addEventListener('click', onClick.bind);

  document.addEventListener('click', (event) => onClick(event))
}

function onClick() {
  
  console.log(this);
}
var person = new Person('Kamila', 'Faron')
console.log("Person: ", person)

var family = {
  "Kamil" : {}
}

function addPersonToFamily(name, ...params) {
  family[name] = addPerson(name, ...params)
}

function addPerson(name, surname, gender) {
  console.log('Jestem ' + name + " " + surname + ", pleć: " + gender);
  console.log(`Jestem ${name} ${surname}, płeć: ${gender}`);

  return new Person(name, surname, gender);
}

addPersonToFamily('Janina', "xyz", 'female');
console.log(family);

var family = { Kamil: {name: "Kamil"}, InnaOsoba: {}, InnaOsoba2: {}}

var Kamil = family.Kamil;
var InnaOsoba = family.InnaOsoba;

const { Kamil, InnaOsoba } = family;