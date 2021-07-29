
function Bounty({deleteBook, firstName, lastName,living, bountyAmount, type, _id}) {
    return(
        <div>

            <span>{firstName}</span>
            <span>{lastName}</span>
            <h2>{living ? "Alive" : "Dead"}</h2>
            <ul>
                <li>{bountyAmount}</li>
                <li>{type}</li>
            </ul>

            <button 
                onClick={() => deleteBook(_id)}>
                    X
            </button>
        </div>
    )
}
//trouble getting react set up :


export default Bounty