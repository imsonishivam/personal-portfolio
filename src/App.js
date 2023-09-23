import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import HeaderPhone from "./components/HeaderPhone";

function App() {
  const [menuOpen, setMenuopen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);

  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };
    window.addEventListener("resize", resizeRatio);
    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);
  return ratio < 2 ? (
    <div className="App">
      <HeaderPhone setMenuopen={setMenuopen} menuOpen={menuOpen} />
      <Header menuOpen={menuOpen} setMenuopen={setMenuopen} />
      <Home ratio={ratio} />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  ) : (
    <em className="custom-message">Please change the ratio to view</em>
  );
}

export default App;
