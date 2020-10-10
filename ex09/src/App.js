import React from "react";

const App = () => {
  const [nameInput, setNameInput] = React.useState('');

  return (
  <form>
    <input 
      type="text" 
      value={nameInput} 
      onChange={(event) => setNameInput(event.target.value)}
    />
    <p> Text: {nameInput} </p> 
  </form>
  );
};

export default App;
