import { useState } from 'react'

function BountyFormHandler({submit, btnText, firstName, lastName, living, bountyAmount, treasures}) {
const initialInsputs = {firstName: firstName || '', lastName: lastName || '', living: living || '', bountyAmount: bountyAmount || '', treasures: treasures || ''}
const [inputs, setInputs] = useState(initialInsputs)


const handleChange =(e) => {
    const { name, value } = e.target
    setInputs(prevInputs => ({...prevInputs, [name]: value}))
}

const handleSubmit = (e) => {
    e.preventDefault()

    submit(inputs)
    setInputs(initialInsputs)
}
    return(
        <form>
            <input 
                name='firstName'
                value={inputs.firstName}
                onChange={handleChange}
                placeholder='First Name'
            />
                        <input 
                name='lastName'
                value={inputs.lastName}
                onChange={handleChange}
                placeholder='Last Name'
            />
                        <input 
                name='living'
                value={inputs.living}
                onChange={handleChange}
                placeholder='Alive / Dead'
            />
                        <input 
                name='bountyAmount'
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder='Bounty Amount'
            />
                        <input 
                name='treasures'
                value={inputs.treasures}
                onChange={handleChange}
                placeholder='Treasures'
            />

            <button className='delete-button' onClick={handleSubmit}>{btnText}</button>
        </form>
    )
}

export default BountyFormHandler 