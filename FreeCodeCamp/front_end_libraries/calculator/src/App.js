import React, { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [char, setChar] = useState("");
  const [firstScreen, setFirstScreen] = useState();
  const [secondScreen, setSecondScreen] = useState();
  useEffect(() => {
    if (operation === "") {
      return;
    }
    if (number.slice(-1) === operation) {
      setOperation("");
      return;
    } else if (
      (number.slice(-1) === "+" ||
        number.slice(-1) === "*" ||
        number.slice(-1) === "/") &&
      number.slice(-1) !== operation &&
      operation !== "-"
    ) {
      setNumber(number.replace(/.$/, operation));
      setSecondScreen(number.replace(/.$/, operation));
      setFirstScreen(number.replace(/.$/, operation));
      return;
    } else if (
      (number.slice(-2, -1) === "-" ||
        number.slice(-2, -1) === "+" ||
        number.slice(-2, -1) === "*" ||
        number.slice(-2, -1) === "/") &&
      number.slice(-1) === "-"
    ) {
      setNumber(number.slice(0, -2) + operation);
      setSecondScreen(number.slice(0, -2) + operation);
      setFirstScreen(number.slice(0, -2) + operation);
      return;
    } else if (number.slice(-1) == "-") {
      setNumber(number.replace(/.$/, operation));
    } else {
      setNumber(number + operation);
      setOperation("");
      setSecondScreen(number + operation);
      setFirstScreen(number + operation);
      return;
    }
  }, [operation]);

  useEffect(() => {
    if (number == "" && char == ".") {
      return;
    }
    if (
      (number.slice(-1) == "+" ||
        number.slice(-1) == "-" ||
        number.slice(-1) == "*" ||
        number.slice(-1) == "/") &&
      char == "."
    ) {
      return;
    }

    let arr = number.split(/[-+*/]/);
    let str = arr[arr.length - 1];
    if (str.indexOf(".") > 0 && char == ".") {
      return;
    } else {
      setNumber(number + char);
      setSecondScreen(number);
      setFirstScreen(number);
      setChar("");
    }
  }, [char]);

  const submitClear = () => {
    setNumber("");
    setOperation("");
    setSecondScreen("");
    setFirstScreen("");
    setChar("");
  };

  const submitEqual = () => {
    
    if (
      number.slice(-1) === "-" ||
      number.slice(-1) === "+" ||
      number.slice(-1) === "*" ||
      number.slice(-1) === "/"
    ) {
      return;
    } else {
      let ans = eval(number);
      setSecondScreen("");
      setFirstScreen(ans);
      setNumber(ans.toString());
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="screen">
          <div className="first">
            {" "}
            <p>{firstScreen}</p>
          </div>
          <div className="second">
            {" "}
            <p>{secondScreen}</p>
          </div>
        </div>

        <div className="buttons">
          <button id="ac" onClick={() => submitClear()}>
            AC
          </button>
          <button className="operators" onClick={() => setOperation("/")}>
            /
          </button>
          <button className="operators" onClick={() => setOperation("*")}>
            x
          </button>
          <button className-="number" onClick={() => setChar("7")}>
            7
          </button>
          <button className-="number" onClick={() => setChar("8")}>
            8
          </button>
          <button className-="number" onClick={() => setChar("9")}>
            9
          </button>
          <button className="operators" onClick={() => setOperation("-")}>
            -
          </button>
          <button className-="number" onClick={() => setChar("4")}>
            4
          </button>
          <button className-="number" onClick={() => setChar("5")}>
            5
          </button>
          <button className-="number" onClick={() => setChar("6")}>
            6
          </button>
          <button className="operators" onClick={() => setOperation("+")}>
            +
          </button>
          <button className-="number" onClick={() => setChar("1")}>
            1
          </button>
          <button className-="number" onClick={() => setChar("2")}>
            2
          </button>
          <button className-="number" onClick={() => setChar("3")}>
            3
          </button>
          <button id="equals" onClick={() => submitEqual()}>
            =
          </button>
          <button id="zero" onClick={(e) => setChar("0")}>
            0
          </button>
          <button id="point" onClick={() => setChar(".")}>
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
