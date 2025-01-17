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
};

export const useUpdateEntryAnswers = () => {
    return useMutation({
        mutationFn: ({ entryAnswers }:
            { entryAnswers: EntryAnswer[] }) =>
            EntryAnswerService.updateEntryAnswers(entryAnswers),
        meta: {
            errorMessage: 'Failed to update entry answers'
        }
    });
};

export const useDeleteEntryAnswers = () => {
    return useMutation({
        mutationFn: ({ entryAnswerIds }:
            { entryAnswerIds: number[] }) =>
            EntryAnswerService.deleteEntryAnswers(entryAnswerIds),
        meta: {
            errorMessage: 'Failed to delete entry answers'
        }
    });
};