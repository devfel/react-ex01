import React from "react";

const App = () => {
  const [description, setDescription] = React.useState("");

  return (
    <form>
      <textarea 
        value={description}
        onChange={({target}) => setDescription(target.value)}
      />
      {description}
    </form>
  );
};
export default App;
