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
import Error from "./pages/ErrorPage";
import Popup from "./pages/Popup";
import CaseStudyDetail1 from "./pages/CaseStudyDetail1"
import CaseStudyDetail2 from "./pages/CaseStudyDetail2"
import CaseStudyDetail3 from "./pages/CaseStudyDetail3"
import CaseStudyDetail4 from "./pages/CaseStudyDetail4"

function App() {
  
  return (
    <div className="App">
      <GlobalStyles/>
     
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/business" element={<Business />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/casestudy" element={<CaseStudy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
        <Route path="/popup" element={<Popup />} />
        <Route path="/csdetail1" element={<CaseStudyDetail1 />} />
        <Route path="/csdetail2" element={<CaseStudyDetail2 />} />
        <Route path="/csdetail3" element={<CaseStudyDetail3 />} />
        <Route path="/csdetail4" element={<CaseStudyDetail4 />} />
      </Routes>
    </BrowserRouter>

    
      
    </div>
  );
}

export default App;
