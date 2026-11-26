import { NavBar } from "./components/navBar";
import { NetworkBadge } from "./components/NetworkBadge";
import { Routes, Route } from "react-router";
import { Estimator } from "./features/estimator";
import { Sites } from "./features/sites";
import { Inventory } from "./features/inventory";
import { Team } from "./features/team";

function App() {
  return (
    <>
      <div className="max-w-md mx-auto min-h-screen py-4 flex flex-col items-center justify-between">
        <NetworkBadge />
        <div className="flex-1 w-full flex-col gap-4 ">
          <Routes>
            <Route path="/estimate" element={<Estimator />} />
            <Route path="/sites" element={<Sites />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/teams" element={<Team />} />
          </Routes>
        </div>
        <NavBar />
      </div>
    </>
  );
}

export default App;
