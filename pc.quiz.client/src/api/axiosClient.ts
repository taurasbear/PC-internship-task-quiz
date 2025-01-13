import axios, { AxiosError, AxiosResponse } from 'axios'

const axiosClient = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
    //timeout: process.env.REACT_APP_AXIOS_TIMEOUT ? parseInt(process.env.REACT_APP_AXIOS_TIMEOUT) : 0,
});

interface ErrorResponse {
    message: string;
}

axiosClient.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
        return response;
    },
    async (error: AxiosError<ErrorResponse>): Promise<any> => {
        const apiError = {
            message: error.response?.data?.message ?? 'An unexpected error occured',
            status: error.response?.status ?? 500,
        };

        Promise.reject(apiError);
    }
);

export default axiosClient;