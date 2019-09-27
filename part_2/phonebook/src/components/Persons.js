import React from 'react';
import Person from './Person';

const Persons = ({persons, deletePerson}) => (
    <div>
      {persons.map((person) => (
          <Person key={person.name} id={person.id} name={person.name} number={person.number} deletePerson={deletePerson}/>
      ))}
    </div>
);

export default Persons;
