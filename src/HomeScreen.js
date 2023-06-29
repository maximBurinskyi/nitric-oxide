import React from 'react';
import FirstPageMain from './FirstPageMain';
import FirstPageMain1 from './FirstPageMain1';
import FirstPageMain2 from './FirstPageMain2';
import './HomeScreen.css';
import Nav from './Nav';

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      {/* <FirstPageMain /> */}
      <FirstPageMain1 />

      <FirstPageMain2 />
      {/* <h1>Test</h1>
      <h1>Test</h1> */}
    </div>
  );
}

export default HomeScreen;
