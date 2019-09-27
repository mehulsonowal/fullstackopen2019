import React from 'react';
import DeleteButton from './DeleteButton';

const Person = ({name, number, id, deletePerson}) => (
    <p>
      {name} {number} <DeleteButton id={id} deletePerson={deletePerson} name={name}/>
    </p>
);

export default Person;
