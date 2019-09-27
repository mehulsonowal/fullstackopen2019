import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';
import services from './services/persons';

const { getAll, create, remove, update } = services;

const App = () => {
    const [ persons, setPersons] = useState([]);

    const [ filter, setFilter] = useState('');
    const [ newName, setNewName ] = useState('');
    const [ newPhonenumber, setNewPhonenumber] = useState('');

    const [message, setMessage] = useState(null);
    const [outcome, setOutcome] = useState(false);

    const handleNameChange = (e) => {
        setNewName(e.target.value);
    };

    const handleNumberChange = (e) => {
        setNewPhonenumber(e.target.value);
    };

    const handleFilterChange = (e) => {
        const newFilter = e.target.value;
	setFilter(newFilter);
	if(newFilter){
	    getAll()
                .then(all => {
                    const filtered = all.filter((person) => person.name.match(new RegExp(newFilter, 'i')));
                    setPersons(filtered);
                });
	}
        else{
            getAll()
                .then(all => setPersons(all));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const findPerson = (persons.find((person) => person.name === newName));
        if(findPerson){
            if(window.confirm(`${findPerson.name} is already added to phonebook, replace the old number with a new one?`)){
                update(findPerson.name, newPhonenumber, findPerson.id)
                    .then(updatedPerson => {
                        const updatedPersons = persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson);
                        setPersons(updatedPersons);
                    });
            }
        }
        else{
            create({name: newName, number: newPhonenumber})
                .then(newPerson => {
                    setPersons([...persons, newPerson]);
                    return newPerson;
                })
                .then((newPerson) => {
                    setMessage(`Added ${newPerson.name}`);
                    setOutcome(true);
                    setTimeout(() => {
                        setMessage(null);
                    }, 5000);
                })
		.catch((e) => {
		    setMessage(e.response.data.error);
		    setOutcome(false);
		    setTimeout(() => {
			setMessage(null);
		    }, 5000);
		});
        }
        setNewName('');
        setNewPhonenumber('');
    };

    const deletePerson = (name, id) => {
        return remove(id)
            .then(
                setPersons(persons.filter((person) => person.id !== id))
            )
            .catch(() => {
                setMessage(`Information of ${name} has already been removed from the server`);
                setOutcome(false);
                setTimeout(() => {
                    setMessage(null);
                }, 5000);
	    });
    };

    useEffect(() => {
        getAll().then(newPersons => {
            setPersons(newPersons);
        });
    }, []);

    return (
	<div>
	  <h2>Phonebook</h2>
          <Notification message={message} outcome={outcome}/>
          <Filter filter={filter} handleFilterChange={handleFilterChange}/>
          <h2>Add a New</h2>
	  <PersonForm handleSubmit={handleSubmit} newName={newName} handleNameChange={handleNameChange}  newPhonenumber={newPhonenumber} handleNumberChange={handleNumberChange}/>
	  <h2>Numbers</h2>
	  <Persons persons={persons} deletePerson={deletePerson}/>
	</div>
    );
};

export default App;
