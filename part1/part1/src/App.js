import React from 'react';

// 3rd option: crating own JSX tag:
const Hello = (args=null) => {
  if(args.dateNow != null) {
    return(
        <div>
            <h2>Hello, world! It's {args.dateNow}</h2>
        </div>
    ) 
  } else {
    return(
      <div>
          <h2>Hello, world!</h2>
      </div>
    )
  }
}

// Using parameters
const HelloToPerson = (insertedName) => {
  return(
    <div>
      <h2>Hello, {insertedName.name}</h2>
    </div>
  )
}

// Using mroe parameters
const Greetings = (insertedCharacteristics) => {
  return(
    <div>
      <p>
        Hello, I'm {insertedCharacteristics.name} and I'm a {insertedCharacteristics.job}
      </p>
    </div>
  )
}

const Footer = () => {
  return(
    <div>
      Created by <a href="https://www.osu.cz">OSU</a>
    </div>
  )
}

const App = () => {
  const dateNow = new Date();
  const a = 20;
  const b = 30;
  console.log(a + b);

  const registeredUsers = [
    { name: 'Peter', job: 'Frotend developer'  },
    { name: 'Maya', job: 'UX designer' }
  ];

  return(
    <div>
      <h1>Greetings!</h1>
      <Hello dateNow={dateNow.toString()} />
      <p>By the way... Did you know that?</p>
      <Hello />
      <p>...is a typical phrase every programmer know. It is used as a placeholder for some kind of phrase, 
        usually written by a novice programmer or programmer that learn a new language.</p>
      <p>The next step in a programming lessons is often adding a name to the greetings like:</p>
      <HelloToPerson name="David"/>
      <HelloToPerson name="Franta"/>
      <Greetings name="Patrik" job="programmer"/>
      <h2>We are welcoming our latest registered users:</h2>
      <p>{registeredUsers[0].name}, {registeredUsers[0].job}</p>
      <p>{registeredUsers[1].name}, {registeredUsers[1].job}</p>
      <Footer/>
    </div>
  )
  
  // 2nd option by JSX syntax (prefered):
  /*
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1', null, "Hello world, it's", dateNow.toString() 
    ),
    React.createElement(
      'p', null, 'a = ', a, ', b = ', a + b
    )
  );
  */

  /*
  return (
    <div>
      <h1>Hello world! It's {dateNow.toString()}</h1>
      <p>a = {a}, b = {b}</p>
    </div>
  )
  */
}



export default App;
