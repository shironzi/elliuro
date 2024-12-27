import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const databaseProviders = [
  {
    provide: 'MYSQL_DATA_SOURCE',
    useFactory: async () => {
      const mysqlDataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return mysqlDataSource.initialize();
    },
  },
  {
    provide: 'MONGODB_DATA_SOURCE',
    useFactory: async () => {
      const mongodbDataSource = new DataSource({
        type: 'mongodb',
        url: process.env.MONGODB_URI,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return mongodbDataSource.initialize();
    },
  },
];