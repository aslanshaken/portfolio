import Header from "./pages/Header/Header";
import TextCarousel from "./pages/TextCarousel/TextCarousel"
import './App.css'
import Welcome from "./pages/Welcome/Welcome";
import About from "./pages/About/About";
import WorkExperiance from "./pages/WorkExperience/WorkExperience";
import Steps from "./pages/Steps/Steps";
import Waterfall from "./pages/Waterfall/Waterfall";

function App() {
  return(
  <div className="App">
    <Header/>
    {/* <TextCarousel/> */}
    <Welcome/>
    <About/>
    <Waterfall/>
    {/* <Steps/> */}
    <WorkExperiance/>
    {/* Work Experiance */}
    {/* Projects */}
    {/* Skills */}
    {/* Resume */}
  </div>
  );
}

export default App;
