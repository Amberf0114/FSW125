const express = require('express')
const app = express()
const { v4 : uuidv4 } = require('uuid')


app.use(express.json())

const bountyRouter = express.Router()

let bounty = [
    {firstName: 'Morgan', lastName: 'Manfree', living: true, bountyAmount: 1000000, treasures: ['gold', 'silver'],_id: uuidv4()},
    {firstName: 'Jessica', lastName: 'Sonhud', living: false, bountyAmount: 0, treasures: ['platinum', 'bronze'], _id: uuidv4()},
    {firstName: 'Wither', lastName: 'Reesepoon', living: true, bountyAmount: 6000, treasures: ['gold', 'silver'], _id: uuidv4()},
    {firstName: 'Reba', lastName: 'Entiremac', living: false, bountyAmount: 0, treasures: ['platinum', 'bronze'], _id: uuidv4()},
    {firstName: 'Dinsel', lastName: 'Shingtonwa', living: true, bountyAmount: 2, treasures: ['platinum', 'bronze'], _id: uuidv4()}
]


bountyRouter.route('/')

.get((req, res) => {
    res.status(200).send(bounty)
})

.post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounty.push(newBounty)

        console.log(bounty)
        res.status(201).send(newBounty)
    })

bountyRouter.route('/:bountyId')
    .get((req, res) => {
        const bountyId = req.params.bountyId
        const foundBounty = bounty.find(bounty => bounty._id === bountyId)
        res.status(200).send(foundBounty)
    })
    .put((req,res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId)
        const updatedBounty = Object.assign(bounty[bountyIndex], req.body)

        res.status(201).send(updatedBounty)
    })
    .delete((req,res) => {
        const bountyId = req.params.bountyId
        console.log("DELETE" ,bountyId)
        const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId)

        bounty.splice(bountyIndex,1)  
        res.status(500).send(`Successfully deleted from the database `)
    })

    module.exports = bountyRouter