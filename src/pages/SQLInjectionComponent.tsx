import React, { useState } from "react";

const SQLInjectionComponent = () => {
  const [user, setUser] = useState<string>("");

  const login = () => {
    const query = `SELECT * FROM users WHERE username = '${user}'`;
    console.log("Executando query insegura:", query);
  };

  return (
    <div>
      <input value={user} onChange={(e) => setUser(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default SQLInjectionComponent;
