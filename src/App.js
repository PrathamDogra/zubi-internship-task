import React from 'react';
import './App.scss';
import Top from "./components/Top/Top";
import Cards from "./components/Cards/Cards";
import Middle from "./components/Middle/Middle";
function App() {
  return (
    <div className="App">
      <Top/>
      <Cards/>
      <Middle/>
    </div>
  );
}

export default App;
