import axios from "axios";

export const apiKey = 'INcnarjPYLzXoMLkIKmsb5NzYzT62dkdHn0lMqFc'

export const nasaApi = axios.create({ baseURL: "https://api.nasa.gov" });
