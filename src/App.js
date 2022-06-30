import Home from './components/home/Home';
import Create from './components/createRecruitement/Create'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ContextProvider from './components/context/Context';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/create' element={ <Create /> } />
        </Routes>
      </BrowserRouter>
    </ContextProvider>

  );
}

export default App;
