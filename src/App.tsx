import React, { useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    return axios.get('http://localhost:7070/tube/videos/popular?limit=48&regionCode=US&fields=id,title,publishedAt,highThumbnail,channelId,channelTitle,categoryId,duration,definition').then((res) => {
      console.log(res.data)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>
      </header>
    </div>
  );
}

export default App;
