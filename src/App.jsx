import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Analyze from "./pages/Analyze";
import Results from "./pages/Results";
import Performance from "./pages/Performance";

function App() {
    return (
        <>
            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/analyze"
                    element={<Analyze />}
                />

                <Route
                    path="/results"
                    element={<Results />}
                />

                <Route
                    path="/performance"
                    element={<Performance />}
                />

            </Routes>
        </>
    );
}

export default App;