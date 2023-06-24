import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/navbar';
import { MainRoute } from './component/route';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <MainRoute/>
    </div>
  );
}

export default App;
