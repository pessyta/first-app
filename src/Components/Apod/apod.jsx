import { useEffect,useState } from "react";
const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=1kVMe5T9YXuP7uuM8QJDWnO6GVRWObu5DLgvPgHv';
const Apod = () => {
 const[apod,setApod] =useState([]);

 const fetchData = () =>{
    fetch(API_URL)
    .then(res => res.json())
    .then(data =>setApod(data))
    .catch(err =>console.error(err));

 }
 useEffect(() =>{
    fetchData()
 }, []);

 

return (
    <div>
      <h1>{apod.title}</h1>
      <p>{apod.copyright}</p>   
      <p>{apod.explanation}</p>
      <img src={apod.url} alt="bolc"/>
    </div>
)
 

} 

export default Apod;