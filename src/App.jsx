import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import OthelloGame from "./pages/OthelloGame.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/othello" element={<OthelloGame />} />
      </Routes>
    </Router>
  );
}

export default App;