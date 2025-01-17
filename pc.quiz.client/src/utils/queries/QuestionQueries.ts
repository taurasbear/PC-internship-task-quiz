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

export const useQuestion = (questionId: number | null, entryId: number | null): UseQueryResult<Question, ApiError> => {
    return useQuery({
        queryKey: ['question', questionId, entryId],
        queryFn: () => QuestionService.getQuestionDetails(Number(questionId), Number(entryId)),
        enabled: questionId !== null && entryId !== null,
        meta: {
            errorMessage: 'Failed to query question'
        },
    });
};

export const useQuestionCount = (): UseQueryResult<number, ApiError> => {
    return useQuery({
        queryKey: ['questionCount'],
        queryFn: () => QuestionService.getQuestionCount(),
        meta: {
            errorMessage: 'Failed to query question count'
        },
    });
};
