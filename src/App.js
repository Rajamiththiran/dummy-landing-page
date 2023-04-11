import "./App.css";

import About from "./Components/About";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <div className="App">
      <Home />
      <About/>
      <Services/>
      <Testimonial/>
    </div>
  );
}

export default App;
