//import logo from './logo.svg';
import './App.css';
import {useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  
  const [pokemonFetchIamges,setpokemonFetchIamges]=useState([]);
  const [pokemonAxiosIamges,setpokemonAxiosIamges]=useState([]);

  const pokemonFetch = async()=>{
    const result=await fetch("https://api.pokemontcg.io/v2/cards?pageSize=10");
    const body=await result.json();
    setpokemonFetchIamges(body.data);
  }

  const pokemonAxios = async()=>{
    const result=await axios.get("https://api.pokemontcg.io/v2/cards?pageSize=10");
    setpokemonAxiosIamges(result.data.data);
  }
  
  useEffect(() => {
    pokemonFetch();
  }, []);

  useEffect(() => {
    pokemonAxios();
  }, []);

  return (
    <>
    <div className="App">
      {pokemonFetchIamges.map((item,i)=>{
        <>
        <div>item.name</div>
        <img src={item.images.large}/>
        </>
      })}
    </div>

    <div>
    {pokemonAxiosIamges.map((item,i)=>{
        <>
        <div>item.name</div>
        <img src={item.images.large}/>
        </>
      })}
    </div>
    </>
  );
}

export default App;
