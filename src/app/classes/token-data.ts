import { AuthSubject } from './auth-subject';

export class TokenData {
    accessTokenExpiration: string;
    subject: AuthSubject;
}