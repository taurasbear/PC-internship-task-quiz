import axios, { AxiosError, AxiosResponse } from 'axios'
import { ApiError } from '../shared/types/ApiError';

const axiosClient = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: process.env.REACT_APP_AXIOS_TIMEOUT ? parseInt(process.env.REACT_APP_AXIOS_TIMEOUT) : 0,
});

interface ErrorResponse {
    message: string;
}

axiosClient.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
        return response;
    },
    async (error: AxiosError<ErrorResponse>): Promise<never> => {
        const apiError: ApiError = {
            message: error.response?.data?.message ?? 'An unexpected error occured',
            status: error.response?.status ?? 500,
        };

        return Promise.reject(apiError);
    }
);

export default axiosClient;