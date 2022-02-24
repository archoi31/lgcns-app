import './App.scss';
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Business from "./pages/Business";
import Technology from "./pages/Technology";
import CaseStudy from "./pages/CaseStudy";
import Contact from "./pages/Contact";

function App() {
  
  return (
    <div className="App">
      <GlobalStyles/>
     
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/business" element={<Technology />} />
        <Route path="/casestudy" element={<CaseStudy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

    
      
    </div>
  );
}

export default App;