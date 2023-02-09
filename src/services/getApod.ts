import { IApodData } from "@/interfaces/IApodData";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { apiKey, nasaApi } from "./nasaApi";

export const getApod = async (): Promise<{ data: IApodData}> => {
  const { data } = await nasaApi.get(`/planetary/apod?api_key=${apiKey}`);
  return { data };
};
