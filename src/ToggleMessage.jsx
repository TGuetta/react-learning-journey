// Step 1: Import useState from React
import { useState } from "react";

// Step 2: Define a React component named ToggleMessage
function ToggleMessage() {
  // Step 3: useState creates a piece of "state" (a variable React watches)
  // `show` is the current value, and `setShow` is the function to change it
  const [show, setShow] = useState(false); // default: hidden

  // Step 4: This function runs when the button is clicked
  function handleClick() {
    // Toggle the current value (true becomes false, false becomes true)
    setShow(!show);
  }

  // Step 5: Return JSX (React's "markup")
  return (
    <div>
      {/* Step 6: When the button is clicked, call handleClick */}
      <button onClick={handleClick}>
        {/* Step 7: Show different text based on the `show` value */}
        {show ? "Hide" : "Show"} Message
      </button>

      {/* Step 8: If `show` is true, show this paragraph */}
      {show && <p>🎉 Surprise! You clicked the button.</p>}
    </div>
  );
}

// Step 9: Export the component so App.jsx can use it
export default ToggleMessage;
