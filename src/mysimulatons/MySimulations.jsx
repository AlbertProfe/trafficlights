
import ListSimulations from "./ListSimulation"
import CreateSimulation from "./CreateSimulation"

const MySimulations = () => {

return (
    <>
      <br />
      <h1 style={{ textAlign: "center" }}>Simulations</h1>
      <hr />
      <CreateSimulation/>
      <br />
      <hr />
      <ListSimulations />
    </>
  );
};

export default MySimulations;
