import type { PropFunction } from "@builder.io/qwik";
import type { CategoriesType } from "components/entities/category";

export interface CategoriesProps {
	currentCategory: CategoriesType;
	categories: CategoriesType[];
	isLoading: boolean;
	setCategory$: PropFunction<(category: CategoriesType) => void>;
}
