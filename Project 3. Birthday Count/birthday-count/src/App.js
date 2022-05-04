import React, { useState } from "react";
import List from "./List";
import data from "./data";
import "./App.css";

function App() {
  const [person, setPerson] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{person.length} birthday Today</h3>
        <List person={person} />
        <button onClick={() => setPerson([])}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
