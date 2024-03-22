import { useState, useEffect, createContext } from "react";
import axios from "axios";

const SimulationsContext = createContext();
const API_URL = "https://65e82ef64bb72f0a9c4e7caf.mockapi.io/v1/todo";
//const API_URL = "http://localhost:8089/api/v1/simulation/simulations";

const DataSimulations = ({ children }) => {
  const [simulations, setSimulations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSimulations = async () => {
      try {
        const response = await axios.get(`${API_URL}`);
        setSimulations(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSimulations();
  }, []);

  const deleteSimulation = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      setSimulations(simulations.filter((simulation) => simulation.id !== id));
    } catch (error) {
      console.error("Error deleting simulation:", error);
    }
  };

  const addSimulation = async (simulation) => {
    try {
      const response = await axios.post(`${API_URL}`, simulation);
      setSimulations([...simulations, response.data]);
    } catch (error) {
      console.error("Error adding simulation:", error);
    }
  };

  const updateSimulation = async (simulation) => {
    try {
      const response = await axios.put(
        `${API_URL}/${simulation.id}`,
        simulation
      );
      setSimulations(
        simulations.map((s) => (s.id === simulation.id ? response.data : s))
      );
    } catch (error) {
      console.error("Error updating simulation:", error);
    }
  };

  return (
    <SimulationsContext.Provider
      value={{
        simulations,
        isLoading,
        deleteSimulation,
        addSimulation,
        updateSimulation,
      }}
    >
      {children}
    </SimulationsContext.Provider>
  );
};

export { DataSimulations, SimulationsContext };
