import { Entities } from 'src/Entities';
import { DataSource, DataSourceOptions, Repository } from 'typeorm';

const DB_CONTEXT_CONFIG: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  entities: Entities,
};

const DbContext = new DataSource(DB_CONTEXT_CONFIG);

export const useRepository = <TEntity>(entityType): Repository<TEntity> =>
  DbContext.getRepository(entityType);

export { DbContext };
