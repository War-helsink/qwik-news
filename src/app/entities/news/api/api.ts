import axios from "axios";

// import type { ParamsType } from "app/shared/interfaces";
import type { NewsApiResponse } from "../model/types";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async () => {
	try {
		const response = await axios.get<NewsApiResponse>(`${BASE_URL}search`, {
			params: {
				apiKey: API_KEY,
				// page_number,
				// page_size,
				// category,
				// keywords,
			},
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const getLatestNews = async () => {
	try {
		const response = await axios.get<NewsApiResponse>(`${BASE_URL}latest-news`, {
			params: {
				apiKey: API_KEY,
			},
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
