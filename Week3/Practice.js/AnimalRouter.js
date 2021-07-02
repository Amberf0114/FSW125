const express = require('express')
const app= express()
const { v4 : uuidv4 } = require('uuid')

const PORT = 3000

//middleware
app.use(express.json())

let animals = [
    {class: 'mammal', name: 'ape' },
    {class: 'amphibian', name: 'frog' },
    {class: 'arachnid', name: 'spider' },
    {class: 'reptile', name: 'lizard' },
    {class: 'arthropod', name: 'tarantula' }
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