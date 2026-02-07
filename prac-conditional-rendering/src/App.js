import React, { useState } from "react";

function Login() {
  return <h2>Welcome, Nirmit! You are logged in 🎉</h2>;
}

function Logout() {
  return <h2>Please log in to continue 🚀</h2>;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Conditional Rendering Demo</h1>

      {/* Conditional Rendering using ternary operator */}
      {isLoggedIn ? <Login /> : <Logout />}

      {/* Toggle Button */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;
