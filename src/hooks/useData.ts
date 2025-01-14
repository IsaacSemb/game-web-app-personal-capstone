import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface APIResponseType<GenericType> {
  count: number;
  results: GenericType[];
}

function useData<GenericDataType>(endpoint: string) {
  const [data, setData] = useState<GenericDataType[]>([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<APIResponseType<GenericDataType>>(endpoint, {
        signal: controller.signal,
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
  }, []);

  return { data, error, isLoading };
}

export default useData;
