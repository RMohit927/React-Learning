import React from 'react';
import Home from './Home';
import TrainerMock from './TrainerMock';
import TrainerList from './TrainerList';
import TrainerDetail from './TrainerDetail';

import { 
  BrowserRouter, 
  Routes, 
  Route,
 } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h2>My Academy Trainers App</h2>
      <div>
        <a href='/'>Home</a> | <a href='/trainers'>Show Trainers</a>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<TrainerList trainerData={TrainerMock} />} />
          <Route path="/trainers/:trainerId" element={<TrainerDetail  />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
