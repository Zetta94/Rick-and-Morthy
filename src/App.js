import './App.css'
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';
import {Routes,Route,useNavigate,useLocation } from "react-router-dom";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Form from './components/Form';

function App () {
  const [characters,setCharacters]= useState([])
  const [access,setAccess]=useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  
  const username='manu@gmail.com'
  const password='123manuel'

  const login =(userData)=>{
    if( userData["password"]===password && userData.username===username  ){
      setAccess(true)
      navigate("/home");
    }
  
  }

  useEffect(() => {
    !access && navigate("/");
 }, [access,navigate]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }


  return (
      <div className='App'>
        {location.pathname === "/" ?<Form login={login}/>:<Nav onSearch={onSearch}/>}
        <Routes>
          <Route path="/home" element={<Cards onClose={onClose} characters={characters}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="detail/:detailId" element={<Detail/>}/>
        </Routes>
      </div>
  )
}

export default App
