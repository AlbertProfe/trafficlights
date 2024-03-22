import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import MySimulations from "./mysimulatons/MySimulations";
import Simulation from "./simulation/Simulation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Simulation />} />
          <Route path="simulation" element={<Simulation />} />
          <Route path="mysimulations" element={<MySimulations />} />
          <Route path="*" element={<Simulation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
