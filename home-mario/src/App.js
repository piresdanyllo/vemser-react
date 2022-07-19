import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SectionCards from "./components/SectionCards/SectionCards";
import SectionMap from "./components/SectionMap/SectionMap";
import SectionText from "./components/SectionText/SectionText";

function App() {
  return (
    <div>
      <Header />
      <SectionCards />
      <SectionText />
      <SectionMap />
      <Footer />
    </div>
  );
}

export default App;
