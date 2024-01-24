import { FruitType } from "../model/fruit-type";
import { Person } from "../model/person";
import { Person1 } from "../model/person1";

var person1 : Person = {
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    favoriteFruit: FruitType.Apple
}

var personByClass = new Person1("f", "l", "g@gmail.com");