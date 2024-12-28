import express from 'express';
import initModels from '../models/init-models.js';
import sequelize from '../database/index.js';
const models = initModels(sequelize);
const { user } = models;

const users = express.Router();

users.get('/:id', async (req, res) => {
  res.json('hello');
});


export default users;
