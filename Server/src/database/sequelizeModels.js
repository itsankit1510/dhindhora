import initModels from '../models/init-models.js';
import sequelize from './index.js';

const models = initModels(sequelize);

export default models;  