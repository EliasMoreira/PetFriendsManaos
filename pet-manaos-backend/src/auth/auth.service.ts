import { Injectable } from "@nestjs/common";
import { BaseError } from "src/error/base-error";
import { UserError } from "src/error/messages/user";
import { AuthRepository } from "./auth.repository";

@Injectable()
export class AuthService {
  constructor(private repository: AuthRepository) {}
  async verifyAuth(login: string, password: string) {
    console.log(`login: ${login} and senha: ${password}`);
    const user = await this.repository.findLogin(login, password);
    console.log(user);
    if (user) {
      return user;
    } else {
      throw new BaseError(UserError.USER_001);
    }
  }
}
