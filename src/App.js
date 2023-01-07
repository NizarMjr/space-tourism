import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Crew from './components/Crew/Crew';
import Destination from './components/Destination/Destination';
import Home from './components/Home/Home';
import Technology from './components/Technology/Technology';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/destination' exact element={<Destination />} />
          <Route path='/crew' exact element={<Crew />} />
          <Route path='/technology' exact element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
