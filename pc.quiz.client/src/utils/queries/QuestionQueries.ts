import { useQuery, UseQueryResult } from "@tanstack/react-query"
import QuestionService from "../services/QuestionService";
import { ApiError } from "../../shared/types/ApiError";

export const useQuestions = (): UseQueryResult<any, ApiError> => {
    return useQuery({
        queryKey: ['questions'],
        queryFn: () => QuestionService.getAll(),
        meta: {
            errorMessage: 'Failed to query questions'
        },
    });
};
