
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Astros from './Components/Astros/Astros';
import Apod from './Components/Apod/apod';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';


// Constante de login
const isLogged = true;
// Guardamos en localStorage



const userData = {
  name:'Pessy',
  age: '29',
}

//link para personas en el espacio
//link para API NASA
//Logo/link para login o para ver perfil

//const links = ['astros', 'apod', true];
const links = [
  {
    "name": 'ASTROS',
    "link": 'astros'
  },
  {
    "name": 'APOD',
    "link": 'apod'
  }
]

function App() {
  useEffect(()=>{
    localStorage.setItem('login',JSON.stringify(isLogged));

  }, [isLogged]);

  return (
    <>
  <Navbar 
  links={links}
  isLogged={JSON.parse(localStorage.login)}/>
  <Routes>
    <Route
    path ='/'
    element = {<Main user={userData}/>}
    />
    
    <Route 
      path='/apod'
      element={<Apod/>}/>

  <Route
  path='/astros'
  element={<Astros/>}
  />

</Routes>
    </>
  )
}

export default App

/* EJERCICIO
CREAR APOD
LINK HACIA APOD

Imagen a link '/'
Tiempo limite viernes 5.30

https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY*/