import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, TodoDetails } from "./pages";
import greennoteimg from "./greennote.png";

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <img className="imglogo" src={greennoteimg} alt="green note"></img>
        <h1>Green Note</h1>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":todoId" element={<TodoDetails />} />
          <Route path="*" element={<div>Nothing to show</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
