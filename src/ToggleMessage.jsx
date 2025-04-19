import { useState } from "react";

function ToggleMessage() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }
  return (
    <div>
      <button onClick={handleClick}>{show ? "Hide" : "Show"} Message</button>
      {show && <p>🎉 Surprise! You clicked the button.</p>}
    </div>
  );
}
export default ToggleMessage;
