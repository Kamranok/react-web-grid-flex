import './App.scss';
import Navbar from './components/navbar/Navbar';
import Showcase from './components/showcase/Showcase';
import Stats from './components/stats/Stats'
import Cli from './components/cli/Cli'
import Cloud from './components/cloud/Cloud'



function App() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <Stats />
      <Cli />
      <Cloud />
    </div>
  );
}

export default App;
