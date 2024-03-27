// Write your Color component here
import { useState } from "react";

const Color = ({ color, setFunction }) => {
  return <div className={color} onClick={() => setFunction(color)}></div>;
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("blue");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>

      <div id="colors-list">
        {
          <>
            <Color color="blue" setFunction={setSelectedColor} />
            <Color color="violet" setFunction={setSelectedColor} />
            <Color color="green" setFunction={setSelectedColor} />
          </>
        }
      </div>
    </div>
  );
};

export default App;
