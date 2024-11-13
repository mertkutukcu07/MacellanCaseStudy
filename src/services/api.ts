import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { EndPoints } from '@/types/endPoints'
import { LoginResponse } from '@/types/login/response'
import { LoginRequest } from '@/types/login/request'
import { MeResponse } from '@/types/me/response'
import { TopUpRequest } from '@/types/topUp/request'
import { TopUpResponse } from '@/types/topUp/response'
import { ReadQrResponse } from '@/types/readQr/response'
import { ApproveResponse } from '@/types/approve/response'
import { ApproveRequest } from '@/types/approve/request'
import { ActivityListResponse } from '@/types/activityList/response'
import type { AppDispatch, RootState } from '@/redux/store'
import { logout, setCredentials } from '@/redux/features/authSlice'
import { RegisterResponse } from '@/types/register/response'
import { RegisterRequest } from '@/types/register/request'
import { ReadQrRequest } from '@/types/readQr/request'

const baseQueryWithReauth = fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token
        if (token) {
            headers.set('Authorization', token)
        }
        headers.set('Content-Type', 'application/json')
        headers.set('Accept', 'application/json')
        return headers
    },
})

const baseQueryWithErrorHandling = async (
    args: any,
    api: any,
    extraOptions: any
) => {
    const result = await baseQueryWithReauth(args, api, extraOptions)

    if (result.error) {
        if (result.error.status === 401) {
            api.dispatch(logout())
        }
    }
    return result
}

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithErrorHandling,
    keepUnusedDataFor: 30,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    tagTypes: ['Me'],
    endpoints: builder => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: credentials => ({
                url: EndPoints.LOGIN,
                method: 'POST',
                body: credentials,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data: loginData } = await queryFulfilled
                    if (loginData.token) {
                        dispatch(
                            setCredentials({
                                token: loginData.token,
                                user: null,
                            })
                        )
                        const meResult = await dispatch(
                            api.endpoints.getMe.initiate(undefined, {
                                forceRefetch: true,
                            })
                        )
                        if (meResult.data) {
                            dispatch(
                                setCredentials({
                                    token: loginData.token,
                                    user: meResult.data,
                                })
                            )
                        }
                    }
                } catch (error) {
                    console.error('Login error:', error)
                }
            },
        }),

        register: builder.mutation<RegisterResponse, RegisterRequest>({
            query: credentials => ({
                url: EndPoints.REGISTER,
                method: 'POST',
                body: credentials,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data: registerData } = await queryFulfilled
                    if (registerData.token) {
                        dispatch(
                            setCredentials({
                                token: registerData.token,
                                user: null,
                            })
                        )
                        const meResult = await dispatch(
                            api.endpoints.getMe.initiate(undefined, {
                                forceRefetch: true,
                            })
                        )
                        if (meResult.data) {
                            dispatch(
                                setCredentials({
                                    token: registerData.token,
                                    user: meResult.data,
                                })
                            )
                        }
                    }
                } catch (error) {
                    console.error('Register error:', error)
                }
            },
        }),

        getMe: builder.query<MeResponse, void>({
            query: () => EndPoints.ME,
            providesTags: ['Me'],
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled
                } catch (error) {
                    console.error('GetMe error:', error)
                }
            },
        }),

        topUp: builder.mutation<TopUpResponse, TopUpRequest>({
            query: data => ({
                url: EndPoints.TOP_UP,
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled, getState }) {
                try {
                    const { data: topUpData } = await queryFulfilled
                    if (topUpData.success) {
                        const meResult = await dispatch(
                            api.endpoints.getMe.initiate(undefined, {
                                forceRefetch: true,
                            })
                        )
                        if (meResult.data) {
                            dispatch(
                                setCredentials({
                                    token:
                                        (getState() as RootState).auth.token ||
                                        '',
                                    user: meResult.data,
                                })
                            )
                        }
                    }
                } catch (error) {
                    console.error('TopUp error:', error)
                }
            },
            invalidatesTags: ['Me'],
        }),

        readQR: builder.mutation<ReadQrResponse, ReadQrRequest>({
            query: data => ({
                url: `${EndPoints.READ_QR}${data.reference_code}`,
                method: 'GET',
            }),
        }),

        approve: builder.mutation<ApproveResponse, ApproveRequest>({
            query: data => ({
                url: EndPoints.APPROVE,
                method: 'POST',
                body: data,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled, getState }) {
                try {
                    const { data: result } = await queryFulfilled
                    if (result.status === 'approved') {
                        const user = (getState() as RootState).auth.user
                        if (user) {
                            dispatch({ type: 'socket/connect' })
                            dispatch({
                                type: 'socket/join',
                                payload: { user_id: user._id },
                            })
                        }
                    }
                } catch (error) {
                    console.error('Approve error:', error)
                }
            },
        }),

        getActivityList: builder.query<ActivityListResponse, void>({
            query: () => ({
                url: EndPoints.ACTIVITY_LIST,
            }),
            providesTags: ['Me'],
        }),
    }),
})

export const invalidateAllQueries = (dispatch: AppDispatch) => {
    dispatch(api.util.resetApiState())
}

export const {
    useLoginMutation,
    useRegisterMutation,
    useGetMeQuery,
    useTopUpMutation,
    useReadQRMutation,
    useApproveMutation,
    useGetActivityListQuery,
} = api
