import ClientCollab from "./components/ClientCollab";
import HeroSection from "./components/HeroSection";
import Expertise from "./components/Expertise";
import Bio from "./components/Bio";
import MyFooter from "./components/MyFooter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <HeroSection />
        <Bio />
        <Expertise />
        <ClientCollab />
        <MyFooter />
      </div>
    </div>
  );
}

export default App;
