import { Inject, Injectable } from "@nestjs/common";
import { UserEntity } from "src/auth/entities/user.entity";
import { Repository } from "typeorm";
import { ReviewEntity } from "./entities/review.entity";

@Injectable()
export class TrainerRepository {
  constructor(
    @Inject("USER_REPOSITORY")
    private userRepository: Repository<UserEntity>,
    @Inject("REVIEW_REPOSITORY")
    private reviewRepository: Repository<ReviewEntity>
  ) {}

  async findAll() {
    return this.userRepository.find({
      where: {
        typeRegistration: "trainer",
      },
    });
  }

  async findOne(id: number) {
    return this.userRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async findAllReviews(id: number) {
    return this.reviewRepository.find({
      select: {
        id: true,
        tutor: true,
        content: true,
        type: true,
        createdAt: true,
      },
      where: {
        userId: id,
      },
    });
  }
}
