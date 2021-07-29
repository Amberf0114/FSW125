import { useState } from 'react'

function BountyFormHandler({submit, btnText, firstName, lastName}) {
const initialInsputs = {firstName: firstName || '', lastName: lastName || ''}
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

            <button className='delete-button' onClick={handleSubmit}>{btnText}</button>
        </form>
    )
}

export default BountyFormHandler 