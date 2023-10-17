import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/error/404.js';

function App() {
  return (
    
    <div className="App">
        <BrowserRouter>
          <Routes>
          <Route path="/home" element ={<Home/>}></Route>
          <Route path="/" element={<About/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
