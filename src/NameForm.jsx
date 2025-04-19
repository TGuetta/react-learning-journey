import { useState } from "react";

function NameForm() {
  // Step 1: Create state to hold the input value
  const [name, setName] = useState("");

  // Step 2: Update the state every time the user types
  function handleChange(event) {
    setName(event.target.value); // read value from the input box
  }

  // Step 3: Handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // prevent page refresh
    alert(`Form submitted! Name: ${name}`);
  }

  // Step 4: Render the form and live preview
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:{" "}
        <input type="text" value={name} onChange={handleChange} />
      </label>

      <p>Your name is: {name}</p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default NameForm;
