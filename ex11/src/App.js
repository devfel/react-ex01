import React from "react";

const App = () => {
  const formFieldsArray = [
    {
      id: "username",
      type: "text",
      label: "Username",
    },
    {
      id: "email",
      type: "email",
      label: "E-mail",
    },
    {
      id: "password",
      type: "password",
      label: "Password",
    }
  ]

  const [form, setForm] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const [response, setResponse] = React.useState(null);

  function handleSubmit(event){
    event.preventDefault();

    fetch('http://woodhoopapi.test/json/wh-api-v001/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form),
    }).then((response) => {
      console.log(response); //testing response result
      //console.log(JSON.stringify(form)) //testing form values
      setResponse(response);
    });
  }

  function handleChange (event) {
    // console.log(event.target.id) //testing event id
    // console.log(event.target.value) //testing event value
    setForm({ ...form, [event.target.id]: event.target.value}) 
  }

  return (
  <form onSubmit={handleSubmit}>
    {formFieldsArray.map(elem => {
      return (
        <div key={elem.id}>
          <label htmlFor={elem.id}>{elem.label}</label>
          <input id={elem.id} name={elem.id} type={elem.type} value={form[elem.id]} onChange={handleChange}/>
          {form[elem.id]}
        </div>
      )
    })}
    {response && response.ok && <p>Account successfully created.</p>}
    {/* Using Array.map above to replace the following commands: 
    <label htmlFor="username">Username:</label>
    <input 
      id="username"
      name="username"
      type="text"
      value={form.username}
      onChange={handleChange}
    />
    {form.username} <br/>

    <label htmlFor="email">E-mail:</label>
    <input 
      id="email"
      name="email"
      type="email"
      value={form.email}
      onChange={handleChange}
    />
    {form.email}<br/>

    
    <label htmlFor="password">Password</label>
    <input
      id="password"
      name="password"
      type="password"
      value={form.password}
      onChange={handleChange}
    />
    {form.password}<br/>
    */}


    <button>GO!!!</button>
  </form>
  );
};
export default App;
