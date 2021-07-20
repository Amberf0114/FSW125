import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios'

function App() {
  const [bounties, setBounty] = useState([])

  useEffect(() => {
    axios.get('/bounties')
    .then(res => console.log(res))
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;
