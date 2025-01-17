import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query"
import EntryService from "../services/EntryService"
import { Entry } from "../../shared/types/entities/Entry";
import { ApiError } from "../../shared/types/ApiError";

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

export const useTopEntries = (): UseQueryResult<Entry[], ApiError> => {
    return useQuery({
        queryKey: ['topEntries'],
        queryFn: () => EntryService.getTopEntries(),
        meta: {
            errorMessage: 'Failed to query top entries'
        },
    });
};