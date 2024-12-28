import SequelizeAuto from 'sequelize-auto';
import config from 'config';

const auto = new SequelizeAuto(
  'Dhindhora',
  'postgres',
  config.get('DB.PASSWORD'),
  {
    host: 'localhost',
    dialect: 'postgres',
    directory: './src/models/', // where to write files
    port: config.get('DB.PORT'),
    lang: 'esm',
    caseModel: 'c', // convert snake_case column names to camelCase field names: user_id -> userId
    caseFile: 'c', // file names created for each model use camelCase.js not snake_case.js
    singularize: true, // convert plural table names to singular model names
    additional: {
      timestamps: true,
      // ...options added to each model
    },
    //   tables: ["table1", "table2", "myschema.table3"], // use all tables, if omitted
    //...
  },
);

auto.run();
