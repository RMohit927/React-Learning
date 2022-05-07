import React from 'react';
import Posts from './Posts';

function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Our Blogs</h2>
          <div className='underline'></div>
        </div>
        <Posts />
      </section>
    </main>
  );
}

export default App;
