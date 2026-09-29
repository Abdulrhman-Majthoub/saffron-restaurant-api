import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./login.dto.js";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login(loginDto: LoginDto) {
    const email = this.configService.getOrThrow<string>("ADMIN_EMAIL");
    const password = this.configService.getOrThrow<string>("ADMIN_PASSWORD");

    if (loginDto.email !== email || loginDto.password !== password) {
      throw new UnauthorizedException("Invalid email or password.");
    }

    const accessToken = await this.jwtService.signAsync(
      { email, role: "admin" },
      {
        secret: this.configService.getOrThrow<string>("JWT_SECRET"),
        expiresIn: 28800,
      },
    );

    return {
      accessToken,
      admin: { email },
    };
  }
}