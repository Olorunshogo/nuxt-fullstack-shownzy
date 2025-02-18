
import type { ISubscription } from '~/types/ISubscription';

export interface IUser {
    id?: number
    username?: string
    name?: string
    loginType?: string
    email?: string
    password?: string
    avatarUrl?: string
    subscription?: ISubscription | null
    stripeCustomerId?: string | null
}