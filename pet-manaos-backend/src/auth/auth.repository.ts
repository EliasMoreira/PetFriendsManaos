import { Inject, Injectable } from "@nestjs/common";
import { UserEntity } from "src/auth/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class AuthRepository {
  constructor(
    @Inject("USER_AUTH_REPOSITORY")
    private userRepository: Repository<UserEntity>
  ) {}

  async findLogin(login: string, password: string) {
    return this.userRepository.findOne({
      select: {
        id: true,
        login: true,
        password: true,
      },
      where: {
        login: login,
        password: password,
      },
    });
  }
}
