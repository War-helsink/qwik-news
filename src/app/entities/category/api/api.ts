import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

import type { CategoriesApiResponse } from "../model/types";

export const getCategories = async () => {
	try {
		const response = await axios.get<CategoriesApiResponse>(
			`${BASE_URL}available/categories`,
			{
				params: {
					apiKey: API_KEY,
				},
			},
		);
		return response.data.categories;
	} catch (error) {
		console.log(error);
	}
};
