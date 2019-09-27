import React from 'react';

const success =  {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBotton: 10
};

const failure =  {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBotton: 10
};

const Notification = ({ message, outcome}) => {    
    if(!message){
        return null;
    }
    const show = outcome ? success : failure;
    return (
        <div style={show}>
          {message}
        </div>
    );
};

export default Notification;
