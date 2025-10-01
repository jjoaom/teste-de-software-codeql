import React, { useState } from "react";

const EvalComponent = () => {
  const [code, setCode] = useState<string>("");

  const runCode = () => {
    // Vulnerabilidade proposital
    eval(code);
  };

  return (
    <div>
      <input value={code} onChange={(e) => setCode(e.target.value)} />
      <button onClick={runCode}>Executar código</button>
    </div>
  );
};

export default EvalComponent;
