import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios'
import Bounty from './Bounty'
import BountyFormHandler from './BountyFormHandler';

function App() {
  const [bounties, setBounty] = useState([])

  const addBounty = (newBounty) => {
    console.log(newBounty)
    axios.post('/bounties', newBounty)
      .then(res => {
        setBounty(prevBounty => [...prevBounty, res.data])
        console.log(bounties)
      })
      .catch(err => console.log(err))
  }

  const deleteBounty = (bountyId) => {
    console.log(bountyId)
    axios.delete(`/bounties/${bountyId}`)

      .then( res => {
        setBounty(prevBounty => prevBounty.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => console.log(err))

      axios.get('/bounties')
    .then(res => {
      console.log(res)
      setBounty(res.data)
    })
    .catch(err => console.log(err))
  }

  const updateBounty = (bountyId, updates) => {
    axios.put(`/bounties/${bountyId}`, updates)
      .then( res => {
        setBounty(prevBounty => prevBounty.filter(bounty => bounty._id )) //if prevbounty = bounty stay the same : update bounty
      })
  }

  // const 

  useEffect(() => {
    axios.get('/bounties')
    .then(res => {
      console.log(res)
      setBounty(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  const bountyList = bounties.map((bounty, index) => <Bounty {...bounty} deleteBook={deleteBounty} updateBounty={updateBounty} key={index}/>)

  return (
    <div className="App">
      <BountyFormHandler 
        submit={addBounty}
        btnText='Add Bounty'/>
      {bountyList}
    </div>
  );
}

export default App;
