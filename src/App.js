import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Expirience/Experience";
import Portfolio from "./components/Porfolio/Portfolio";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <AboutMe />
      <Experience />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
