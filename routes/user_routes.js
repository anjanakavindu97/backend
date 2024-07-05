const express = require('express')
const router = express.Router()
const { addUser, getUsers, getUser, updateUser, deleteUser} = require('../handlers/userHanderler');

router.post('/users', async(req, res) => {
    let user = await addUser(req.body)
    res.send(user)
})

router.get('/getusers', async(req, res) => {
    let users = await getUsers()
    res.send(users)
})

router.get('/getuser/:id', async(req, res) => {
    let user = await getUser(req.params.id)
    res.send(user)
})

router.put('/updateuser/:id', async(req, res) => {
    await updateUser(req.params.id, req.body)
    res.send({})
})

router.delete('/deleteuser/:id', async(req, res) => {
    await deleteUser(req.params.id)
    res.send({})
})

module.exports = router