import React, { useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./styles.css";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  const onChange = input => {
    setInput(input);
    //console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = button => { 
    //console.log("Button pressed", button);

    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = event => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

  return (
    <div className="App">
      <input type="text" 
        value={input}
        placeholder={"Output appear here ..........."}
        onChange={onChangeInput}
      />
      <Keyboard
        keyboardRef={r => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}

export default App;
