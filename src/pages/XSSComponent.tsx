import React, { useState } from "react";

const XSSComponent = () => {
  const [html, setHtml] = useState<string>("");

  return (
    <div className="text-center">
      <h2>Teste XSS</h2>
      <input
        type="text"
        value={html}
        onChange={(e) => setHtml(e.target.value)}
        placeholder="Digite HTML"
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default XSSComponent;
