import { useMutation } from "@tanstack/react-query"
import EntryAnswerService from "../services/EntryAnswerService";

export const useAddEntryAnswerSingle = () => {
    return useMutation({
        mutationFn: ({ questionId, answerOptionId, entryId }:
            { questionId: number, answerOptionId: number, entryId?: number }) =>
            EntryAnswerService.addEntryAnswerSingle(questionId, answerOptionId, entryId),
        meta: {
            errorMessage: 'Failed to create entry answer'
        }
    });
}