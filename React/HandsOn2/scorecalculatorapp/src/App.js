import React, { useState } from 'react';
import './App.css';
import CalculateScore from './CalculateScore';

function App() {
  const studentScore = [{name: "Steeve", school: "DNV Public School", total: 284, goal: 3}];
  const [data, setData] = useState(studentScore[0]);
  return (
    <main>
      <CalculateScore studentScore={data}/>
    </main>
  );
}

export default App;
