import { useDispatch, useSelector } from "react-redux";
import { updateLoginField } from "../redux/loginSlice";

function LoginForm() {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();

  function handleChange(event) {
    const { name, value } = event.target;
    dispatch(updateLoginField({ name, value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(
      `Login submitted:\nEmail: ${login.email}\nPassword: ${login.password}`
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <label>
        Email:
        <input
          type="email"
          name="email"
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
          value={login.password}
          onChange={handleChange}
        />
      </label>

      <br />

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
