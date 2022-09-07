import './App.css';
import React from 'react';

function App() {
  const [formData, setFormData] = React.useState(
    { firstName: "", lastName: "" }
  );
  console.log(formData);
  function handleChange(event) {
    setFormData(prevObj => {
      return { ...prevObj, [event.target.name]: event.target.value }
    });
  }
  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
      />
    </form>
  );
}

export default App;
