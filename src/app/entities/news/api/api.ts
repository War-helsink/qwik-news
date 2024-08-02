import axios from "axios";

import type { ParamsType } from "app/shared/interfaces";
import type { NewsApiResponse } from "../model/types";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({
	pageNumber,
	pageSize,
	category,
	keywords,
	language,
}: ParamsType) => {
	try {
		const response = await axios.get<NewsApiResponse>(`${BASE_URL}search`, {
			params: {
				apiKey: API_KEY,
				page_number: pageNumber,
				page_size: pageSize,
				category,
				keywords,
				language,
			},
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const getLatestNews = async () => {
	try {
		const response = await axios.get<NewsApiResponse>(
			`${BASE_URL}latest-news`,
			{
				params: {
					apiKey: API_KEY,
				},
			},
		);
		return response.data.news;
	} catch (error) {
		console.log(error);
	}
};
