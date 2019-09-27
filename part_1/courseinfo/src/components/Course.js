import React from 'react';

const Course = ({ course }) => {
    return (
        <div>
	  <Header course={course}/>
	  <Content parts={course.parts}/>
          <Total parts={course.parts}/>
        </div>
    );
};

const Header = ({course}) => {
    return (
          <h1>{course.name}</h1>
    );
};

const Content = ({parts}) => {
    return (
        <div>
          {parts.map((part) => <Part part={part.name} exercise={part.exercises}/>)}
	</div>
    );
};

const Total = ({parts}) => {
    // const exercises = [parts[0].exercises, parts[1].exercises, parts[2].exercises];
    // let sum = 0;
    // exercises.forEach(exercise => {
    //     sum += exercise;
    // });
    const total = parts.reduce((sum, part) => sum += part.exercises, 0);
    
    return (
        <div>
          <p>
            <em>total of {total} exercises</em>
          </p>
        </div>
    );
};

const Part = ({part, exercise}) => {
    return (
        <div>
          <p>
            {part} {exercise}
          </p>
        </div>
    );
};

export default Course;
