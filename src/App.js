// import MyNav from "./components/MyNav";
import ClientCollab from "./components/pageContent/ClientCollab";
import HeroSection from "./components/pageContent/HeroSection";
import Expertise from "./components/pageContent/Expertise";
import Bio from "./components/pageContent/Bio";
import MyFooter from "./components/MyFooter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeroSection />
        <Bio />
        <Expertise />
        <ClientCollab />
        <MyFooter />
      </header>
    </div>
  );
}

export default App;
