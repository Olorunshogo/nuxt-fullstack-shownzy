
import type { IUser } from '~/types/IUser';

export interface ISession {
    authToken?: string;
    user?: IUser
    userId?: number
}