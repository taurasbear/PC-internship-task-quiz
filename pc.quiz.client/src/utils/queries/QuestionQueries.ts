import { useQuery, UseQueryResult } from "@tanstack/react-query"
import QuestionService from "../services/QuestionService";
import { ApiError } from "../../shared/types/ApiError";
import { Question } from "../../shared/types/entities/Question";

export const useQuestions = (): UseQueryResult<Question[], ApiError> => {
    return useQuery({
        queryKey: ['questions'],
        queryFn: () => QuestionService.getAll(),
        meta: {
            errorMessage: 'Failed to query questions'
        },
    });
};
