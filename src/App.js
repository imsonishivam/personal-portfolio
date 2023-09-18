import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
