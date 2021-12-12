import React from 'react';
import Header from './components/header/header';
import Main from './components/main/main';

import './App.css';


const App = () => {

  // testing out express server

  // async function fetchCampaign() {
  //   const api = await fetch('http://localhost:5000/api/campaign')
  //   const response = await api.json();
  //   return response
  // }

  // fetchCampaign().then(campaign => {
  //   console.log(campaign);
  // })


  // implement a Dark theme switch using useContext hook

  const theme = {
    white: '#fff',
    offWhite: '#fff'
  }

  return (

    <div className='App'>
      <Header />
      <Main />
    </div>

  )
}


export default App;
