import React from 'react';

const DeleteButton = ({name, id, deletePerson, setMessage}) => {
    const confirm = () => {
        if(window.confirm(`Delete ${name} ?`)){
            deletePerson(name, id);
        }
    };
    
    return (
        <button onClick={confirm}>delete</button>
    );
};

export default DeleteButton;
