import './App.css';
import Home from './pages/Home';
import CariMobil from './pages/CariMobil';
import HasilCari from './pages/HasilPencarian';
import DetailMobil from './pages/DetailMobil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/CariMobil' element={<CariMobil />}></Route>
          <Route exact path='/HasilCari' element={<HasilCari />}></Route>
          <Route exact path="DetailMobil/:id" element={<DetailMobil />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
