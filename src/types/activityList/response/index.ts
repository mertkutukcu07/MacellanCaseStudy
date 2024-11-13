export type ActivityListResponse = {
    result: Activity[]
}

export type Activity = {
    type: 'capture' | 'top-up'
    user_id: string
    amount: number
    created_at: string
    updated_at: string
}
