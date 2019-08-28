import { AuthSubject } from './auth-subject';

export class TokenData {
    token: string;
    tokenExpires: string;
    refreshToken: string;
    refreshTokenExpires: string;
    subject: AuthSubject;
}