export type ReadQrResponse = {
    _id: string
    status: 'pending' | 'approved' | 'completed' | 'failed'
    reference_code: string
    amount: number
    user_id: string
    point_usage: number
}
