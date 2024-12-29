import models from '../database/sequelizeModels';
import { validateUserSchema } from '../schema/users';

const addUser = async (req, res) => {
  try {
    console.log(await validateUserSchema(req.body));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default {
  addUser,
};
