import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting name="John" timeOfDay="Morning" />
      <Greeting name="Jane" timeOfDay="Afternoon" />
      <Greeting name="Doe" timeOfDay="Evening" />
    </div>
  );
}

export default App;
