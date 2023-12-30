import { Router, Routes , Route } from 'react-router-dom';
import './App.css';
import { Navbar  , Home , MovieDetails , Search} from './components/index';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/movie/:page/:type' element={<MovieDetails/>}/>
        <Route exact path='/results/:search' element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
