const express = require('express')
const app= express()
const { v4 : uuidv4 } = require('uuid')

const PORT = 3000

//middleware
app.use(express.json())

let animals = [
    {class: 'mammal', name: 'ape', _id: uuidv4() },
    {class: 'amphibian', name: 'frog', _id: uuidv4()  },
    {class: 'arachnid', name: 'spider', _id: uuidv4()  },
    {class: 'reptile', name: 'lizard', _id: uuidv4()  },
    {class: 'arthropod', name: 'tarantula', _id: uuidv4()  }
]

// a route parameter is never null or undefined
// a route parameter is alwas a string with positive length

//routes
AnimalRouter
    .get('/', (req,res) => {
        res.send(animals)
    })

    //new code for parameters and query strings
    .get(':/animalId', (req, res) =>{
        console.log(req.params) //will allow us to extract one unique identifier

        const animalId = req.params.animalId
        const singularAnimal = animals.find(animal => animal._id === animalId)

        res.send(singularAnimal)

    })

    .get('/search/name' , (req,res) => {
        // GET some
        console.log(req.query)

        const animalName = req.query.name
        const filteredAnimals = animals.filter(animal => animal.name === animalName)

        res.send(filteredAnimals)
    })

    .post('/', (req,res) => {
        const newAnimal = req.body
        newAnimal._id = uuidv4()
        animals.push(newAnimal)

        console.log(animals)
        res.send(`Successfully added ${newAnimal.name} to the database.`)
    })

    .delete('/:animalId', (req,res) => {
        const animalId = req.params.animalId
        const singularAnimal = animal.findIndex(animal => animal._id === animalId)
        animals.splice(animal, 1)
        
        res.send('Resource successfullly deleted!')
    })


    .put('/:animalId', (req, res) => {
        const animalId = req.params.animalId
        const animalIndex = animals.findIndex(animal => animal._id === animalId)
        const updatedAnimalResource = Object.assign(animals[animalIndex], req.body)

        res.send(`Resource successfully updated to ${updatedAnimalResource}`)
    }) //PUT one

    //Object Object or Object String error is express trying to serialize, or turn an object back into an object
    //o solve error, can parse 
 module.exports = animalRouter