import React from "react";

const App = () => {
  const [form, setForm] =  React.useState({
    name: '',
    email: ''
  });

  function handleSubmit(event) {
    event.preventDefault();
    //console.log(event); //just to check event
  }
  
  function handleChange({target}){
    const {id, value} = target;
    //console.log(id, value); //checking values for the event.target
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input 
        id="name"
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      {form.name}
      
      <label htmlFor="email">E-mail:</label>
      <input 
        id="email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      {form.email}
      <button>Send</button>

    </form>
  )

};
export default App;
