import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosRequestConfig, CanceledError } from "axios";

interface APIResponseType<GenericType> {
  count: number;
  results: GenericType[];
}

function useData<GenericDataType>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  depedencies?: any[]
) {
  const [data, setData] = useState<GenericDataType[]>([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setIsLoading(true);
      apiClient
        .get<APIResponseType<GenericDataType>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((response) => {
          setData(response.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });
      return () => controller.abort();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    depedencies ? [...depedencies] : []
  );

  return { data, error, isLoading };
}

export default useData;
