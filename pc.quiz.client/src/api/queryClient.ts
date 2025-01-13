import { QueryCache, MutationCache, QueryClient, QueryKey } from "@tanstack/react-query";

interface QueryMeta {
    errorMessage?: string;
    invalidateQueries?: QueryKey | QueryKey[];
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: process.env.REACT_APP_QUERY_CLIENT_RETRY ? parseInt(process.env.REACT_APP_QUERY_CLIENT_RETRY) : 1,
            staleTime: process.env.REACT_APP_QUERY_CLIENT_STATE_TIME ? parseInt(process.env.REACT_APP_QUERY_CLIENT_STATE_TIME) : 10000,
        },
    },

    queryCache: new QueryCache({
        onError: (error, query) => {
            const meta = query.meta as QueryMeta;
            const errorHeader = meta?.errorMessage ?? 'Query failed';

            console.error(`${errorHeader}: ${error?.message}`);
        },
    }),

    mutationCache: new MutationCache({
        onSuccess: (data, variables, context, mutation) => {
            const meta = mutation.meta as QueryMeta;

            if (meta?.invalidateQueries) {
                const queriesToInvalidate = Array.isArray(meta.invalidateQueries)
                    ? meta.invalidateQueries
                    : [meta.invalidateQueries];

                queriesToInvalidate.forEach(queryKey => {
                    queryClient.invalidateQueries({ queryKey });
                });
            }
        },

        onError: (error, variables, context, mutation) => {
            const meta = mutation.meta as QueryMeta;
            const errorHeader = meta?.errorMessage ?? 'Mutation failed';

            console.error(`${errorHeader}: ${error.message}`);
        },
    }),
});

export default queryClient;