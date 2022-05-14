import './App.css';
import Card from './Components/Card/Card';
import CardArea from './Components/CardArea/CardArea';
import FeatureArea from './Components/FeatureArea/FeatureArea';
import HeroArea from './Components/HeroArea/HeroArea';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroArea />
      <FeatureArea />
    
      <CardArea />
    </div>
  );
}

export default App;
