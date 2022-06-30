import Home from './components/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path='/' element={<Home />} />
   </Routes>
   </BrowserRouter>

  );
}

export default App;
