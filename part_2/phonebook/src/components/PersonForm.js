import React from 'react';

const PersonForm = ({handleSubmit, newName, handleNameChange, newPhonenumber, handleNumberChange}) => {
    return (
         <form onSubmit={handleSubmit}>
            <div>
              name: <input value={newName} onChange={handleNameChange} required/>
            </div>
            <div>
              number: <input value={newPhonenumber} onChange={handleNumberChange} required/>
            </div>            
            <div>
              <button type="submit">add</button>
            </div>
	  </form>
    );  
};

export default PersonForm;
