import express from 'express';
import router from './router/index.js';
import helmet from 'helmet';
import sequelize from './database/index.js';

const app = express();

app.use(helmet());

app.use('/', router);

try {
  await sequelize.sync({ force: true });
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default app;
