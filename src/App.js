
import './App.css';


import Navbar from './component/Navbar/Nav';
import Main from './component/Chapter/Main';
import Verse from './component/Chapter/varses'

function App() {
  return (
    <div className="App">
    <Navbar />

    <Main />
    <Verse/>
    
    </div>
  );
}

export default App;
