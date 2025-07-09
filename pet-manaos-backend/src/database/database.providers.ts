import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "petManaos",
  entities: ["dist/**/entities/*{.ts,.js}"],
  migrationsTableName: "migrations",
  migrations: ["dist/**/migrations/*{.ts,.js}"],
  migrationsTransactionMode: "all",
  synchronize: false,
  migrationsRun: true,
  logging: false,
});

export const databaseProviders = [
  {
    provide: "DATA_SOURCE",
    useFactory: async () => {
      return dataSource.initialize();
    },
  },
];
