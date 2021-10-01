// eslint-disable-next-line import/no-extraneous-dependencies
import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';
import { Access } from '../modules/user/infra/typeorm/entities/Access';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
// import { DB_URL } from './constants';

export class DBManager {
  private static connection: Connection;

  public static async getConnection(): Promise<Connection> {
    if (!DBManager.connection || !DBManager.connection.isConnected) {
      if (DBManager.connection) {
        await DBManager.connection.close();
      }
      DBManager.connection = await createConnection({
        url: 'postgres://postgres:12345678@localhost:5432/refreshToken',
        type: 'postgres',
        entities: [Access],
        synchronize: false,
        namingStrategy: new SnakeNamingStrategy(),
      });
    }

    return DBManager.connection;
  }
}
