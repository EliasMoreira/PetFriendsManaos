import { Controller, Get, Query } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(@Query("login") login: string, @Query("senha") senha: string) {
    return this.authService.verifyAuth(login, senha);
  }
}
