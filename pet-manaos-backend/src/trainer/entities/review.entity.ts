import { UserEntity } from "src/auth/entities/user.entity";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "review" })
export class ReviewEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "userId" })
  userId: number;

  @Column({ name: "tutor" })
  tutor: string;

  @ManyToOne(() => UserEntity, (user) => user.review)
  @JoinColumn({ name: "userId", referencedColumnName: "id" })
  user: UserEntity;

  @Column()
  content: string;

  @Column()
  type: string;

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
