import type { ResourceReturn } from "@builder.io/qwik";
import type { INews } from "components/entities/news";
import type { CategoriesType } from "components/entities/category";

import type { SkeletonsProps } from "components/shared/model/props";
import type { IFilters } from "components/shared/interfaces";
import type { NewsType } from "components/shared/interfaces";

export interface NewsFiltersProps {
	categories: CategoriesType[];
	filters: IFilters;
}

export interface NewsListProps {
	news?: INews[];
	type?: NewsType;
}

export interface NewsListWithSkeletonProps extends NewsListProps {
	direction?: SkeletonsProps["direction"];
	isLoading: boolean;
}

export interface  NewsListResourceLoadingProps extends NewsListProps {
	direction?: SkeletonsProps["direction"];

	value: ResourceReturn<INews[] | undefined>;
}
