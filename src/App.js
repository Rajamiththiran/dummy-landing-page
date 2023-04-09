import "./App.css";

import About from "./Components/About";
import Home from "./Components/Home";
import Services from "./Components/Services";


function App() {
  return (
    <div className="App">
      <Home />
      <About/>
      <Services/>
    </div>
  );
}

export default App;
