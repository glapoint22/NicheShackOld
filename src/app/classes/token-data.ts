import { AuthSubject } from './auth-subject';

export class TokenData {
    accessToken: string;
    accessTokenExpiration: string;
    refreshToken: string;
    subject: AuthSubject;
}