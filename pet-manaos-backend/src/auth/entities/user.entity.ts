import { ReviewEntity } from "src/trainer/entities/review.entity";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "user" })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "name", nullable: false })
  name: string;

  @Column()
  typeRegistration: string;

  @Column()
  price: string;

  @Column()
  neighborhood: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  bio: string;

  @Column()
  viewsCount: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @OneToMany(() => ReviewEntity, (review) => review.user)
  review: ReviewEntity[];

  @CreateDateColumn({ name: "createdAt", nullable: false })
  createdAt: Date;

  @Column({ name: "createdBy", nullable: true })
  createdBy?: string;

  @UpdateDateColumn({ name: "updatedAt", nullable: false })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deletedAt", nullable: false })
  deletedAt: Date;

  @Column({ name: "deletedBy", nullable: true })
  deletedBy?: string;
}
