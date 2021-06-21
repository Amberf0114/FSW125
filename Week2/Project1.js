const express = require('express')
const app = express()

const PORT = 3000

let animals = [
    {class: 'mammal', name: 'ape' },
    {class: 'amphibian', name: 'frog' },
    {class: 'arachnid', name: 'spider' },
    {class: 'reptile', name: 'lizard' },
    {class: 'arthropod', name: 'tarantula' }
]

let plants = [
    {class: 'Coniferophyta', name: 'Pine Tree' },
    {class: 'Anthophyta', name: 'Rose' },
    {class: 'Monocotyledons', name: 'Onion' },
    {class: 'Dicotyledons', name: 'Eucalyptus' },
]
let fungi = [
    {class: 'Zygomycota', name: 'Bread Mold' },
    {class: 'Ascomycota', name: 'Yeast' },
    {class: 'Basidiomycota', name: 'Rust' },
    {class: 'Deuteromycota', name: 'lizard' },
    {class: 'Deuteromycota', name: 'BLack Mold' }
]


app.get('/animals', (req , res) => {
    res.send(animals)
})

app.get('/plants' , (req , res) => {
    res.send(plants)
})

app.get('/fungi' , (req , res) => {
    res.send(fungi)
})


app.listen(PORT, () => {
    console.log('PORT established...')
})