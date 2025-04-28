import { useDispatch, useSelector } from "react-redux";
import { updateLoginField } from "../redux/loginSlice";

import { useState } from "react"; // for error tracking

function LoginForm() {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    dispatch(updateLoginField({ name, value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    // ✅ Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!login.email) {
      setError("Email is required.");
      return;
    }

    if (!emailRegex.test(login.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!login.password) {
      setError("Password is required.");
      return;
    }

    setError(""); // Clear error if all valid
    alert(
      `Login submitted:\nEmail: ${login.email}\nPassword: ${login.password}`
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Login</h2>

      <label>
        Email:
        <input
          type="email"
          name="email"
          required
          value={login.email}
          onChange={handleChange}
        />
      </label>

      <br />

      <label>
        Password:
        <input
          type="password"
          name="password"
          required
          value={login.password}
          onChange={handleChange}
        />
      </label>

      <br />

      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
