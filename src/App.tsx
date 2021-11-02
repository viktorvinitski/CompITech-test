import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import RandomJoke from "./components/RandomJoke/RandomJoke";
import 'antd/dist/antd.css'
import FindedJokesArea from './components/FindedJokesArea/FindedJokesArea';

function App() {
  return (
      <>
          <Header />
          <RandomJoke />
          <FindedJokesArea />
      </>
  );
}

export default App;
