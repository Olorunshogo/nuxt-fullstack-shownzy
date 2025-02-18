
export type ISubscription = {
    id?: number
    userId: number
    stripeId: string
    stripeStatus: string | null
    quantity: number | null
    trialEndsAt: number | null
    endsAt: number | null
}