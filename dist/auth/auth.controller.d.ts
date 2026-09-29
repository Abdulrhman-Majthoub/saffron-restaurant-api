import { AuthService } from "./auth.service.js";
import { LoginDto } from "./login.dto.js";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
        admin: {
            email: string;
        };
    }>;
}
