import { Injectable } from '@angular/core';
import { Person } from '../shared/model/person';

@Injectable({
  providedIn: 'root'
})
export class PeronsService {
  persons = new Map<number, Person>();
  nextId = 1;

  constructor() { }

  list() : Person[] {
    return Array.from(this.persons.values());
  }

  get(id : number) : Person | undefined {
    return this.persons.get(id);
  }

  add(newPersonData:Person) {
    newPersonData.id = this.nextId
    this.persons.set(this.nextId, newPersonData);
    this.nextId++;
  }
 
  update(existingPerson : Person) : void {
    if (this.persons.has(existingPerson.id)) {
      this.persons.set(existingPerson.id, existingPerson);
    }
  }

  delete(existingPersonId : number) : void {
    this.persons.delete(existingPersonId);
  }
}
