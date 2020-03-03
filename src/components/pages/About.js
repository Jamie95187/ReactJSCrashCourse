import React from 'react';

function About() {
  return(
    // If you don't actually need a div you can use Reac.Fragment. Like a ghost
    // but you need it to return something
    <React.Fragment>
      <h1>About</h1>
      <p>This is the TodoList app v1.0.0. It is part of a React crash coruse</p>
    </React.Fragment>
  )
}

export default About;
