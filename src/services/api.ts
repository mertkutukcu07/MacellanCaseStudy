import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { EndPoints } from "@/types/endPoints";
import { LoginResponse } from "@/types/login/response";
import { LoginRequest } from "@/types/login/request";
import { MeResponse } from "@/types/me/response";
import { TopUpRequest } from "@/types/topUp/request";
import { TopUpResponse } from "@/types/topUp/response";
import { ReadQrResponse } from "@/types/readQr/response";
import { ReadQrRequest } from "@/types/readQr/request";
import { ApproveResponse } from "@/types/approve/response";
import { ApproveRequest } from "@/types/approve/request";
import { ActivityListResponse } from "@/types/activityList/response";
import { AppDispatch, RootState } from "@/redux/store";
import { logout } from "@/redux/features/authSlice";
import { persistor } from "@/redux/store";

const baseQueryWithReauth = fetchBaseQuery({
  baseUrl: process.env.BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");
    return headers;
  },
});

const baseQueryWithErrorHandling = async (
  args: any,
  api: any,
  extraOptions: any
) => {
  const result = await baseQueryWithReauth(args, api, extraOptions);

  if (result.error) {
    if (result.error.status === 401) {
      api.dispatch(logout());

      await persistor.purge();
    }
  }
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithErrorHandling,
  keepUnusedDataFor: 30,
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  tagTypes: ["Me"],
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: EndPoints.LOGIN,
        method: "POST",
        body: credentials,
      }),
    }),

    getMe: builder.query<MeResponse, void>({
      query: () => EndPoints.ME,
      // Cache yönetimi için tag ekleyelim
      providesTags: ["Me"],
      // Error handling
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          // Özel hata yönetimi gerekiyorsa
          console.error("GetMe error:", error);
        }
      },
    }),

    topUp: builder.mutation<TopUpResponse, TopUpRequest>({
      query: (amount) => ({
        url: EndPoints.TOP_UP,
        method: "POST",
        body: { amount },
      }),
    }),

    readQR: builder.query<ReadQrResponse, ReadQrRequest>({
      query: (data) => ({
        url: `${EndPoints.READ_QR}:${data.reference_code}`,
        method: "GET",
      }),
    }),

    approve: builder.mutation<ApproveResponse, ApproveRequest>({
      query: (data) => ({
        url: EndPoints.REGISTER,
        method: "POST",
        body: data,
      }),
    }),

    getActivityList: builder.query<ActivityListResponse, void>({
      query: () => ({
        url: EndPoints.ACTIVITY_LIST,
      }),
    }),
  }),
});

export const invalidateAllQueries = (dispatch: AppDispatch) => {
  dispatch(api.util.resetApiState());
};

export const {
  useLoginMutation,
  useGetMeQuery,
  useTopUpMutation,
  useReadQRQuery,
  useApproveMutation,
  useGetActivityListQuery,
} = api;
