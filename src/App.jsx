import Contact from "./contact";
import Home from "./home";
import Landing from "./landing";
import Skills from "./skill";
import Project from "./project";
import { BrowserRouter } from "react-router-dom";
const App=()=>{
  return(
    <BrowserRouter>
    <div>
    <Home/>
    <Landing/>
    <Skills/>
    <Project/>
    <Contact/>
    </div>
    </BrowserRouter>
  )
}
export default App;