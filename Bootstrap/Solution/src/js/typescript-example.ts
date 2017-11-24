import './../scss/styles.scss';

function sum(x: number, y: number): number {
  return x + y;
}

type name = 'jan' | 'janusz';

function addText(element: HTMLElement, text: name): void {
  element.innerText = text;
}

interface Person {
  name: string;
  surname: string;
  birthday: Date;
  secondName?: string;
}

function createPerson(person: Person) {
  return person;
}

export default class Worker {
  name: string;
  surname: string;
  birthday: Date;
  secondName?: string;
  defaultName: string = 'Janusz';

  constructor(person: Person) {
    const { name, surname, birthday, secondName } = person;
    this.name = name;
    this.surname = surname;
    this.birthday = birthday;
    this.secondName = secondName;
  }

  getFullName(): string {
    return `${this.name} ${this.surname}`;
  }
}

sum(3, 4);
addText(document.createElement('div'), 'jan');
const person = createPerson({
  name: 'Bartosz',
  surname: 'Kotrys',
  birthday: new Date(),
  secondName: 'Patryk',
});
const person2 = createPerson({
  name: 'Kamil',
  surname: 'Faron',
  birthday: new Date(),
});


new Worker(person);
new Worker(person2);
