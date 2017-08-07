'use strict';

(function () {

  function Person(name, surname, gender) {
    name = name;
    this.name = name;
    this.surname = surname;
    this.creationTime = new Date();
    if (gender !== undefined) {
      this.male = "male"
    } else {
      this.male = gender;
    }
    // this.male = gender !== undefined ? "male" : gender;

    this.fullname = function () {
      return this.name + " " + this.surname;
    }

    setTimeout(function () {
      console.log("Person" + x)
    }, 1000);
  }

  var person = new Person("Kamil", "Faron");
  var person2 = new Person("Bartosz", "Kotrys");
  var person3 = new Person("Dorota", "Korczowska", "female");

  console.log(person);
  console.log(person2);
  console.log(person3);

  console.log(typeof person);
  console.log(typeof person === "object");
  console.log(person instanceof Person);

  console.log(person.fullname());
  console.log(person2.fullname());
  console.log(person3.fullname());

  console.log("Main js" + x);

})();