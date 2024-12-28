import { Sequelize } from 'sequelize';
import config from 'config';

const sequelize = new Sequelize(
  config.get('DB.NAME'),
  config.get('DB.USERNAME'),
  config.get('DB.PASSWORD'),
  {
    host: 'localhost',
    dialect: 'postgres',
  },
);

export default sequelize;
