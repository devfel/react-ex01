import React from "react";

const App = () => {
  const [description, setDescription] = React.useState("");
  const [gender, setGender] = React.useState("");

  return (
    <form>
      <textarea 
        value={description}
        //Next code line is replacing: 
        //onChange={(event) => setDescription(event.target.value)}
        onChange={({target}) => setDescription(target.value)} 
        rows="6"
      />
      {description}
      
      <select 
        value={gender} 
        onChange={(event) => setGender(event.target.value)}
        id="gender"
      >
        {/* Default selected option, another way is to start state with one valid value*/}
        <option disabled value="">Choose</option> 
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {gender}
    </form>
  );
};
export default App;
