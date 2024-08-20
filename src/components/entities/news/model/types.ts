import type { CategoriesType } from "components/entities/category";

export interface NewsApiResponse {
	news: INews[];
	page: number;
	status: string;
}

export interface INews {
	author: string;
	category: CategoriesType[];
	description: string;
	id: string;
	image: string;
	language: string;
	published: string;
	title: string;
	url: string;
}
