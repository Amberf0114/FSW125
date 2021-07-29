import { useState } from "react"
import BountyFormHandler from "./BountyFormHandler"


function Bounty({deleteBook, updateBounty, firstName, lastName, living, bountyAmount, treasures, _id}) {

    const [Edit, setEdit] = useState(false)

    const toggle = () => {
        setEdit(true)
    }

    const handleEdit = (updates) => {
        updateBounty(_id, updates)
        setEdit(false)
    }


    return(
        <div>

            <span>{firstName + ' '}</span>
            <span>{lastName}</span>
            <p>{living ? "Alive" : "Dead"}</p>


            <ul>
                <li>{bountyAmount}</li>
                <li>{treasures}</li>
            </ul>

            <button 
                onClick={() => deleteBook(_id)}>
                    x
            </button>
            <button 
                onClick={() => toggle(_id)}>
                    Edit
            </button>

            {
                Edit ? <BountyFormHandler 
                submit={handleEdit}
                btnText='Edit Bounty'/> : ''
            }
        </div>
    )
}


export default Bounty