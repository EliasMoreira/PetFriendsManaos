import { UserEntity } from "src/auth/entities/user.entity";
import { DataSource } from "typeorm";
import { ReviewEntity } from "./entities/review.entity";

export const TrainerProviders = [
  {
    provide: "USER_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
    inject: ["DATA_SOURCE"],
  },
  {
    provide: "REVIEW_REPOSITORY",
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ReviewEntity),
    inject: ["DATA_SOURCE"],
  },
];
