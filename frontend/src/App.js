import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState, useEffect}from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(()=>{
    async function get(){
      await axios.get(
        '/api'
      ).then(response =>{
        setData(response.data);
      }).catch(error => {
        setData(error.message);
      });
    }
    get();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {data}
      </header>
    </div>
  );
}

export default App;
