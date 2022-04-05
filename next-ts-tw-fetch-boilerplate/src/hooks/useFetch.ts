import { useState } from 'react';

/*
  1. 넘어오는 데이터 형태에 대해 T 값을 지정
  2. interface FetchResult { ok: boolean, code : string }
  3. const [function, { loading, data, error }] = useFetch<FetchResult>('/api/users');
*/

interface useFetchState<T> {
  loading: boolean;
  data?: T;
  error?: object;
}

type useFetchResult<T> = [(data: any) => void, useFetchState<T>];

export default function useFetch<T = any>(url: string): useFetchResult<T> {
  const [state, setSate] = useState<useFetchState<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });

  function mutation(data: any) {
    setSate((prev) => ({ ...prev, loading: true }));
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then((data) => setSate((prev) => ({ ...prev, data })))
      .catch((error) => setSate((prev) => ({ ...prev, error })))
      .finally(() => setSate((prev) => ({ ...prev, loading: false })));
  }
  return [mutation, { ...state }];
}
