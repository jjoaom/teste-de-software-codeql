import { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const a = parseFloat(num1);
  const b = parseFloat(num2);

  const somar = () => {
    if (!isNaN(a) && !isNaN(b)) {
      setResult(a + b);
    } else {
      alert("Digite números válidos!");
    }
  };

  const subtrair = () => {
    if (!isNaN(a) && !isNaN(b)) {
      setResult(a - b);
    } else {
      alert("Digite números válidos!");
    }
  };

  const multiplicar = () => {
    if (!isNaN(a) && !isNaN(b)) {
      setResult(a * b);
    } else {
      alert("Digite números válidos!");
    }
  };

  const dividir = () => {
    if (!isNaN(a) && !isNaN(b)) {
      setResult(a / b);
    } else {
      alert("Digite números válidos!");
    }
  };

  const limpar = () => {
    setNum1("");
    setNum2("");
    setResult(null);
  };


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-body">
              <h1 className="fs-2 text-center mb-4">Calculadora</h1>
              <div className="mb-3">
                <input
                  type="text"
                  value={num1}
                  onChange={(e) => setNum1(e.target.value)}
                  placeholder="Digite o primeiro número"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={num2}
                  onChange={(e) => setNum2(e.target.value)}
                  placeholder="Digite o segundo número"
                  className="form-control"
                />
              </div>
              <div className="row g-2 mb-3">
                <div className="col-6 d-grid">
                  <button onClick={somar} className="btn btn-primary">
                    Somar
                  </button>
                </div>
                <div className="col-6 d-grid">
                  <button onClick={subtrair} className="btn btn-primary">
                    Subtrair
                  </button>
                </div>
                <div className="col-6 d-grid">
                  <button onClick={multiplicar} className="btn btn-primary">
                    Multiplicar
                  </button>
                </div>
                <div className="col-6 d-grid">
                  <button onClick={dividir} className="btn btn-primary">
                    Dividir
                  </button>
                </div>
                <div className="col-12 d-grid">
                  <button onClick={limpar} className="btn btn-secondary">
                    Limpar
                  </button>
                </div>
              </div>
              {result !== null && (
                <div className="alert alert-success text-center" role="alert">
                  <h2 className="fs-4 mb-0">Resultado: {result}</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
