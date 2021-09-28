

const express = require('express')
const app = express()
const { basketballTeams } = require('./data.js')
const port = process.env.PORT || 3000
const cors = require('cors')
app.use(cors());

app.get('/basketball-teams', (req, res) => {
    res.send(basketballTeams)
})

app.get('/basketball-teams/:id', (req, res) => {
    const newTeam = basketballTeams.find((team) => team.id === Number(req.params.id))
    res.send(newTeam)
})

module.exports = { app }
