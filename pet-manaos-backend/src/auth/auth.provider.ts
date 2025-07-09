import { DataSource } from "typeorm";
import { UserEntity } from "./entities/user.entity";

export const AuthProviders = [
  {
    provide: "USER_AUTH_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
    inject: ["DATA_SOURCE"],
  },
];
