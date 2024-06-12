
import { useEffect, useState } from "react";
import { ProgressBar } from "./Components/ProgressBar";
import NavBar from "./Components/NarBar/NavBar";
import Footer from "./Components/Footer/Footer";
import AnimatedRoute from "./Components/AnimatedRoute";
import { BrowserRouter as Router } from "react-router-dom";
import { useRef } from "react";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import Facebook from "./tracking/FacebookPixelOne";
function App() {

  const mainRef = useRef();
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);
  <Facebook />;
  return (
    <div ref={mainRef} className={`App ${theme} `}>
      <ProgressBar target={mainRef} />
      <Router>
        <NavBar theme={theme} setTheme={setTheme} />
        <AnimatedRoute />
        <ScrollToTopButton />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
