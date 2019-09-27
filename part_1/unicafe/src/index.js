import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({feedback, handleClick}) => (<button onClick={handleClick}>{feedback}</button>);

const Statistic = ({text, data}) => (<p>{text} {data}</p>);

const Statistics = ({good, neutral, bad}) => {
    return (good + bad + neutral === 0) ? (<p>No feedback given</p>) :
	(
		<div>
		<h1>statistics</h1>
		<table>
		<tbody>
		<tr><td><Statistic text="good" data={good}/></td></tr>
		<tr><td><Statistic text="neutral" data={neutral}/></td></tr>
		<tr><td><Statistic text="bad" data={bad}/></td></tr>
		<tr><td><Statistic text="all" data={good + neutral + bad}/></td></tr>
		<tr><td><Statistic text="average" data={(good - bad) / (good + neutral + bad)}/></td></tr>
		<tr><td><Statistic text="positive" data={good / (good + neutral + bad) * 100 + ' %'}/></td></tr>
		</tbody>
	    </table>
	    </div>
	)
};
	    
const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleGoodClick = () => {
	setGood(good + 1);
    };

    const handleNeutralClick = () => {
	setNeutral(neutral + 1);
    };

    const handleBadClick = () => {
	setBad(bad + 1);
    };


    return (
        <div>
	<h1>give feedback</h1>
	    <Button feedback='good' handleClick={handleGoodClick}/>
	    <Button feedback='neutral' handleClick={handleNeutralClick}/>
	    <Button feedback='bad' handleClick={handleBadClick}/>
	    <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

