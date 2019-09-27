import React from 'react';

const ShowButton = ({ display, handleClick }) => {
    return (
        <button onClick={handleClick}>{display ? 'hide' : 'show'}</button>
    );
};

export default ShowButton;
