import type { INews } from "app/entities/news";
import type { CategoriesType } from "app/entities/category";

import type { IFilters } from "app/shared/interfaces";
import type { NewsType } from "app/shared/interfaces";

export interface NewsFiltersProps {
	categories: CategoriesType[];
	filters: IFilters;

	isLoadingCategories: boolean;

	changeFilter: (key: string, value: string | number | null) => void;
}

export interface NewsListProps {
	news?: INews[];
	type?: NewsType;
}
