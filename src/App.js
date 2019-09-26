import React from 'react';
import './App.css';

import Wrapper from "./components/Wrapper";
import RedditNews from "./components/RedditNews";

function App() {
  return (
    <div className="App">
        <Wrapper>
          <RedditNews></RedditNews>
        </Wrapper>
    </div>
  );
}

export default App;
