import express from 'express';
import models from '../database/sequelizeModels';
import { addUser } from '../controllers/users.js';
const users = express.Router();

users.get('/:id', async (req, res) => {});

users.post('/', addUser);

export default users;
