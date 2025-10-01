import React from "react";

const UnsafeHandler = () => {
  const handleClick = (e: any) => {
    // Vulnerabilidade proposital
    const userInput = e.target.value;
    console.log("Processando input inseguro:", userInput);
  };

  return <input onChange={handleClick} placeholder="Digite algo" />;
};

export default UnsafeHandler;
