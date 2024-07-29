import type { CategoriesType } from "entities/category";

export interface NewsByFiltersState {
	isLoading: boolean;

	categories: CategoriesType[];
	isLoadingCategories: boolean;
}
