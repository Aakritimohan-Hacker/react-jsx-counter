import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function tick() {
  const element = (
    <div>
      <h1>Hello, world {new Date().toLocaleTimeString()}.</h1>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
