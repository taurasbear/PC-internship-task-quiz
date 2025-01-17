import { useMutation } from "@tanstack/react-query"
import EntryService from "../services/EntryService"

export const useCreateEntry = () => {
    return useMutation({
        mutationFn: ({ email }:
            { email: string }) =>
            EntryService.createEntry(email),
        meta: {
            errorMessage: 'Failed to create entry'
        }
    });
};

export const useFinishEntry = () => {
    return useMutation({
        mutationFn: ({ entryId }:
            { entryId: number }) =>
            EntryService.finishEntry(entryId),
        meta: {
            errorMessage: 'Failed to finsh entry'
        }
    });
}