import React from "react";
import { useEffect,useState } from 'react'
import axios from 'axios'
import './App.css';
import InputBlock from "./components/InputBlock";
import Content from "./components/Content";

function App() {
  const [photos, setPhotos] = useState([])
  const [photo, setPhoto] = useState('')
  const API_KEY = '19845756-09d7f5fd12664030932e4939c';

  useEffect(() => {
    if(photo) {
     axios
      .get("https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(`${photo}`))
      .then((res) => {
        setPhotos (res.data)
      })
      .catch((err) => {
        console.log(err);
      });
    } 
  }, [photo]);

function getItems(title){
  setPhoto(title)
}

  return (
    <div className="App">
      <InputBlock clickBtn={getItems}/>
      <Content arrPosts = {photos}/>
      {!photo && <h1>Please enter type of pic</h1>}
    </div>
  );
}

export default App;
