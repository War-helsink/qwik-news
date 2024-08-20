import type { PropFunction } from "@builder.io/qwik";
import type { CategoriesType } from "components/entities/category";
import type { SkeletonsProps } from "components/shared/model/props";

export interface CategoriesProps {
	currentCategory: CategoriesType;
	categories: CategoriesType[];
	isLoading: boolean;
	setCategory$: PropFunction<(category: CategoriesType) => void>;
}

export interface CategoriesWithSkeletonProps extends CategoriesProps {
	type?: SkeletonsProps["type"];
	direction?: SkeletonsProps["direction"];
	isLoading: boolean;
}
