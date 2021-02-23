import './App.css';
import Navbar  from './Components/Navbar'
import  Items from './Components/Items'
import Footer from './Components/Footer'
import  Login from './Components/Login'
import  Vip from './Components/Vip'
import  Search from './Components/Search'
import {Route} from 'react-router-dom' 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test the First APP</h1>
            <Route>
            <Navbar />
            <Items/>
            <Footer/>
            <Login/>
            <Vip />
            <Search />
            </Route>
      </header>
    </div>
  );
}

export default App;
