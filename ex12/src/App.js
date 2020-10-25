import React from "react";

const App = () => {
  const [description, setDescription] = React.useState("");
  const [gender, setGender] = React.useState("");

  const [product, setProduct] = React.useState('');
  const [color, setColor] = React.useState('');

  function handleChange({ target }) {
    setProduct(target.value);
  }

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

      <h2>Colors</h2>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setColor(target.value)}
          checked={color === 'blue'}
          value="blue"
        />
        Blue
      </label>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setColor(target.value)}
          checked={color === 'red'}
          value="red"
        />
        Red
      </label>
      <h2>Products</h2>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          checked={product === 'smartphone'}
          value="smartphone"
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          checked={product === 'laptop'}
          value="laptop"
        />
        Laptop
      </label>
    </form>
  );
};
export default App;
