const express = require('express')
const Jobs = require('./data.json')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Bangladesh ! hello ! Kurigram ... ulipur')
})
app.get('/job', (req, res) => {
  res.send(Jobs)
})

app.get('/job/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log(`params ${id}`);
    const job = Jobs.find(job=>job.id===id )
    if(job){
        res.send(job)
    }
    else{
        res.json({message: "data not found!"})
    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})