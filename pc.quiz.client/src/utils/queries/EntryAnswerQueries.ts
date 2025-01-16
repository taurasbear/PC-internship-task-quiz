import { useMutation } from "@tanstack/react-query"
import EntryAnswerService from "../services/EntryAnswerService";
import { EntryAnswer } from "../../shared/types/entities/EntryAnswer";

export const useAddEntryAnswers = () => {
    return useMutation({
        mutationFn: ({ entryAnswers }:
            { entryAnswers: EntryAnswer[] }) =>
            EntryAnswerService.addEntryAnswers(entryAnswers),
        meta: {
            errorMessage: 'Failed to add entry answers'
        }
    });
}