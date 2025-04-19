function Greeting({ name, timeOfDay }) {
  return (
    <div>
      <h3>
        Good {timeOfDay}, {name}!
      </h3>
    </div>
  );
}

export default Greeting;
