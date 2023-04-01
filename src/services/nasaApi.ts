import axios from "axios";

export const apiKey = 'Y7iwfsee1eOFqIJ5SKGN0tL5JvdIFvVXjX4Z65Y4'

export const nasaApi = axios.create({ baseURL: "https://api.nasa.gov" });
