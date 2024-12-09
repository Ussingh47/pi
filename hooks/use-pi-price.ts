'use client';

import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function usePiPrice() {
  const { data, error, isLoading } = useSWR(
    '/api/pi-price',
    fetcher,
    {
      refreshInterval: 60000, // Refresh every minute
    }
  );

  return {
    data,
    isLoading,
    error,
  };
}