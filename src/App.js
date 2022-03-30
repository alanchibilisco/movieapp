import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import ListFilms from "./components/ListFilms";
import Login from "./components/Login";
import CreateAcc from "./components/CreateAcc";
import Film from "./components/Film";
import LogBar from "./components/LogBar";
import { useEffect, useState } from "react";
import Adm from "./components/Adm";
function App() {
  const [listStarW, setListStarW] = useState([]);
  const getApiSW = async () => {
    try {
      const res = await fetch(
        "http://api.tvmaze.com/search/shows?q=star%20wars."
      );
      const resJson = await res.json();
      setListStarW(resJson);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApiSW();
  }, []);
  const URLSuperUser=process.env.REACT_APP_API_SUPERUSER;
  const URLUsers=process.env.REACT_APP_API_USERS;
  return (
    <div className="">
      <BrowserRouter>
        <main>         
          <Routes>
            <Route exact path="/" element={<Index></Index>}></Route>
            <Route
              exact
              path="/ListFilms"
              element={<ListFilms listStarW={listStarW}></ListFilms>}
            ></Route>
            <Route exact path="/Login" element={<Login URLSuperUser={URLSuperUser} URLUsers={URLUsers}></Login>}></Route>
            <Route
              exact
              path="/CreateAccount"
              element={<CreateAcc URLUsers={URLUsers}></CreateAcc>}
            ></Route>
            <Route exact path="/Film" element={<Film></Film>}></Route>
            <Route exact path="/Film/:id" element={<Film></Film>}></Route>
            <Route exact path="/Adm" element={<Adm URLUsers={URLUsers}></Adm>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
