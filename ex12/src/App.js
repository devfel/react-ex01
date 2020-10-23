import React from "react";

const App = () => {
  const [description, setDescription] = React.useState("");

  return (
    <form>
      <textarea 
        value={description}
        onChange={({target}) => setDescription(target.value)}
        rows="6"
      />
      {description}
    </form>
  );
};
export default App;
