const express = require('express')
const app = express()
const { v4 : uuidv4 } = require('uuid')


app.use(express.json())

let bounty = [
    {firstName: 'Morgan', lastName: 'Manfree', living: true, bountyAmount: 1000000, type: 'Jedi',_id: uuidv4()},
    {firstName: 'Jessica', lastName: 'Sonhud', living: false, bountyAmount: 0, type: 'Sith', _id: uuidv4()},
    {firstName: 'Wither', lastName: 'Reesepoon', living: true, bountyAmount: 6000, type: 'Jedi', _id: uuidv4()},
    {firstName: 'Reba', lastName: 'Entiremac', living: false, bountyAmount: 0, type: 'Sith', _id: uuidv4()},
    {firstName: 'Dinsel', lastName: 'Shingtonwa', living: true, bountyAmount: 2, type: 'Sith', _id: uuidv4()}
]

bountyRouter
    .get('/', (req,res) => {
        res.send(bounty)
    })

    .post('/',(req,res) =>{
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounty.push(newBounty)

        console.log(bounty)
        res.send(`Successfully added ${newBounty.name} to the database `)
    })

    module.exports = bountyRouter