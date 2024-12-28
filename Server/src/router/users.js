import express from 'express';

const users = express.Router(); 

users.get('/:id', (req, res) => {
    console.log(req.params)
    res.json("hello")
})

export default users;