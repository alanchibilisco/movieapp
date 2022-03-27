import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import ListFilms from './components/ListFilms';
import Login from './components/Login';
import CreateAcc from './components/CreateAcc';
import Film from './components/Film';
import LogBar from './components/LogBar';
function App() {
  
  return (
    <div className="">      
      <BrowserRouter>      
      <main>
      <LogBar></LogBar>
        <Routes>
          <Route exact path='/' element={<Index></Index>}></Route>
          <Route exact path='/ListFilms' element={<ListFilms></ListFilms>}></Route>
          <Route exact path='/Login' element={<Login></Login>}></Route>
          <Route exact path='/CreateAccount' element={<CreateAcc></CreateAcc>}></Route>
          <Route exact path='/Film' element={<Film></Film>}></Route>
        </Routes>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
