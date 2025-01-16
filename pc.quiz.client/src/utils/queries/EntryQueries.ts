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
}