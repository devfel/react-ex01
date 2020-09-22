import React from "react";

const App = () => {
  const [counter, setCounter] = React.useState(0);
  const [notification, setNotification] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setNotification("Item added to the kart");
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotification(null);
    }, 1000);
    setCounter(counter + 1);
  }

  return (
    <div>
      <p>{notification}</p>
      <button onClick={handleClick}>{counter}</button>
    </div>
  );
};

export default App;
