const express = require('express')
const app = express()
const { v4 : uuidv4 } = require('uuid')


app.use(express.json())

const bountyRouter = express.Router()

let bounty = [
    {firstName: 'Morgan', lastName: 'Manfree', living: true, bountyAmount: 1000000, type: 'Jedi',_id: uuidv4()},
    {firstName: 'Jessica', lastName: 'Sonhud', living: false, bountyAmount: 0, type: 'Sith', _id: uuidv4()},
    {firstName: 'Wither', lastName: 'Reesepoon', living: true, bountyAmount: 6000, type: 'Jedi', _id: uuidv4()},
    {firstName: 'Reba', lastName: 'Entiremac', living: false, bountyAmount: 0, type: 'Sith', _id: uuidv4()},
    {firstName: 'Dinsel', lastName: 'Shingtonwa', living: true, bountyAmount: 2, type: 'Sith', _id: uuidv4()}
]

bountyRouter.route('/')
//bountyRouter
    //.get('/', (req,res) => {
    .get((req, res) => {
        res.send(bounty)
    })

    .post((req, res) => {
    //.post('/',(req,res) =>{
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounty.push(newBounty)

        console.log(bounty)
        res.send(newBounty)
    })

bountyRouter.route('/:bountyId')
    .get((req, res) => {
        const bountyId = req.params.bountyId
        const foundBounty = bounty.find(bounty => bounty._id === bountyId)
        res.send(foundBounty)
    })
    .put((req,res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId)
        const updatedBounty = Object.assign(bounty[bountyIndex], req.body)

        res.send(updatedBounty)
    })
    .delete((req,res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounty.findIndex(bounty => bounty._id === bountyId)

        bounty.splice(bountyIndex,1)  //splice---------
        res.send(`Successfully deleted from the database `)
    })

    module.exports = bountyRouter
