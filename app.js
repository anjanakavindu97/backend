const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const userRoutes = require('./routes/user_routes');
var cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('running...')
})

app.use( userRoutes);

async function connectDb() {
    await mongoose.connect("mongodb://localhost:27017", {
        dbName: "UserDb",
        family: 4
    })
}

connectDb().catch(error => console.error(error));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})