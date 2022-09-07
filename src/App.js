import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [firstName, setFirstName] = React.useState();
  function handleChange(event){
    setFirstName(prevVal => prevVal = event.target.value);
    console.log(firstName);
  }
  return (
    <form>
      <input
      type="text"
      placeholder="First Name"
      onChange={handleChange}
      />
    </form>
  );
}

export default App;
