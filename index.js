const App = () => {
  const [expression, setExpresion] = React.useState("");
  const [answer, setAnswer] = React.useState();

  const display = (symbol) => {
    setExpresion((prev) => prev + symbol);
    if (expression[expression.length - 1] == "=") {
      if (/[0-9.]/.test(symbol)) {
        setExpresion(symbol);
      } else {
        setExpresion(answer + symbol);
      }}
    }
    const calculate = () => {
      setAnswer(eval(expression));
      setExpresion((prev) => prev + "=");
    };
    const allClear = () => {
      setExpresion("");
      setAnswer(0);
    };
    const clear = () => {
      setExpresion((prev) =>
        prev
          .split("")
          .slice(0, prev.length - 1)
          .join("")
      );
      setAnswer(0);
    };

    return (
      <div className="container">
        <div className="grid">
          <div className="dis">
            <input type="text" value={expression} placeholder="0" disabled />
            <div className="total">{answer}</div>
          </div>
          <div onClick={allClear} className="padButton AC dark-red">
            AC
          </div>
          <div onClick={clear} className="padButton C dark-red">
            C
          </div>
          <div onClick={() => display("/")} className="padButton div">
            /
          </div>
          <div onClick={() => display("x")} className="padButton times">
            x
          </div>
          <div
            onClick={() => display("7")}
            className="padButton seven dark-gray"
          >
            7
          </div>
          <div
            onClick={() => display("8")}
            className="padButton eight dark-gray"
          >
            8
          </div>
          <div
            onClick={() => display("9")}
            className="padButton nine dark-gray"
          >
            9
          </div>
          <div onClick={() => display("-")} className="padButton minus">
            -
          </div>
          <div
            onClick={() => display("4")}
            className="padButton four dark-gray"
          >
            4
          </div>
          <div
            onClick={() => display("5")}
            className="padButton five dark-gray"
          >
            5
          </div>
          <div onClick={() => display("6")} className="padButton six dark-gray">
            6
          </div>
          <div onClick={() => display("+")} className="padButton plus">
            +
          </div>
          <div onClick={() => display("1")} className="padButton one dark-gray">
            1
          </div>
          <div onClick={() => display("2")} className="padButton two dark-gray">
            2
          </div>
          <div
            onClick={() => display("3")}
            className="padButton three dark-gray"
          >
            3
          </div>
          <div onClick={calculate} className="padButton equal dark-blue">
            =
          </div>
          <div
            onClick={() => display("0")}
            className="padButton zero dark-gray"
          >
            0
          </div>
          <div onClick={() => display(".")} className="padButton dot dark-gray">
            .
          </div>
        </div>
      </div>
    );
  };

ReactDOM.render(<App />, document.getElementById("root"));
