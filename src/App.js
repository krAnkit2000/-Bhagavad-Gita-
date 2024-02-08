
import './App.css';


import Navbar from './component/Navbar/Nav';
import Main from './component/maincontainer/Main';
import Filter from './component/category/Category';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Filter/>
    <Main/>

    
    </div>
  );
}

export default App;
