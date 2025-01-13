import { useQuery } from "@tanstack/react-query"
import QuestionService from "../services/QuestionService";

export const useQuestions = () => {
    return useQuery({
        queryKey: ['questions'],
        queryFn: () => QuestionService.getAll(),
        meta: {
            errorMessage: 'Failed to query questions'
        },
    });
};
