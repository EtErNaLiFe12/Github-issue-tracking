import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider as Provider, QueryKey } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental';

// import { IS_DEV } from 'config';
import { persistQueryClient } from 'react-query/persistQueryClient-experimental';
interface Props {
  children: ReactNode;
  queryClient: QueryClient;
}

export default new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export function ReactQueryProvider({ queryClient, children }: Props) {
  // const showQuery = useSelector(({ app }) => app.isQueryShow);

  const localStoragePersistor = createWebStoragePersistor({
    storage: window.localStorage,
  });

  const noPersistQueries: QueryKey[] = ['refresh_all_asset'];

  persistQueryClient({
    queryClient,
    persistor: localStoragePersistor,
    maxAge: 1000 * 60 * 60 * 24 * 5,
    hydrateOptions: {},
    dehydrateOptions: {
      shouldDehydrateQuery: ({ queryKey }) => {
        return !noPersistQueries.includes(queryKey);
      },
    },
  });
  return (
    <Provider client={queryClient}>
      {children}
      {/* {showQuery && <ReactQueryDevtools initialIsOpen={false} />} */}
    </Provider>
  );
}
