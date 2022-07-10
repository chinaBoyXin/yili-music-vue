import axios from "axios";

const baseURL: string = import.meta.env.VITE_API_HOST;

const instance = axios.create({
  baseURL,
});

export const { get, post, put } = instance;
