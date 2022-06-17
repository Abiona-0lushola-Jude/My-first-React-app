import React from 'react';
// import image from "./pexels-daniel-reche-1556704.jpg"

function App() {
  return (
    <div>
        <section className='header'>
          <h2 className='logo'>Hi-Lite</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact Us</li>
          </ul>
          <p className='order'>Order for our service</p>
        </section>
        <section className='hero'>
          <div className='left'>
            <h1>Let's get your home and office illuminated</h1>
            <div className='hero-btn'>
              <p>Order for our service</p>
              <p>Check recent works</p>
            </div>
          </div>
        </section>
    </div>
  );
}

export default App;
