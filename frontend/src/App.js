import React, { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/test/')
      .then(res => res.json())
      .then(data => setData(data.data));
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Web Application</h1>
        <h3>Docker, Django, Postgres, React</h3>

        <p>{data}</p>
      </header>
    </div>
  );
}

export default App;
