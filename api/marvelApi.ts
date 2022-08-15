import axios from "axios";

export const marvelApi = axios.create({
	baseURL: "http://gateway.marvel.com/v1/public",
});
