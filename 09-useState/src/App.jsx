import React, { useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <div>
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />

      <p>{JSON.stringify(form.email)}</p>
      <p>{JSON.stringify(form.password)}</p>
    </div>
  );
};

export default App;


