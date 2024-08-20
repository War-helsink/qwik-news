import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

import type { LanguageApiResponse } from "../model/types";

export const getLanguages = async () => {
	try {
		const response = await axios.get<LanguageApiResponse>(
			`${BASE_URL}available/languages`,
			{
				params: {
					apiKey: API_KEY,
				},
			},
		);
		return response.data.languages;
	} catch (error) {
		console.log(error);
	}
};
