import { useQuery } from "@tanstack/react-query";
import { getData } from "../service/service";

export const useData = (language) => {
  return useQuery({
    queryKey: ["repo", language],
    queryFn: () => getData(language),
    enabled: !!language,
    keepPreviousData: true,
  });
};
