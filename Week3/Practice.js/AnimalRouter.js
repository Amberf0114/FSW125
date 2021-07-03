const express = require('express')
const app= express()
const { v4 : uuidv4 } = require('uuid')

const PORT = 3000

//middleware
app.use(express.json())

let animals = [
    {class: 'mammal', name: 'ape', _id: uuidv4() },
    {class: 'amphibian', name: 'frog', _id: uuidv4() },
    {class: 'arachnid', name: 'spider', _id: uuidv4() },
    {class: 'reptile', name: 'lizard', _id: uuidv4() },
    {class: 'arthropod', name: 'tarantula',_id: uuidv4() }
]



AnimalRouter
    .get('/', (req,res) => {
        res.send(animals)
    })

    .post('/', (req,res) => {
        const newAnimal = req.body
        newAnimal._id = uuidv4()
        animals.push(newAnimal)

        console.log(animals)
        res.send(`Successfully added ${newAnimal.name} to the database.`)
 })

 module.exports = animalRouter