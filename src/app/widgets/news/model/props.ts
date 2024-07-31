import type { INews } from "app/entities/news";
import type { CategoriesType } from "app/entities/category";

import type { IFilters } from "app/shared/interfaces";
import type { NewsType } from "app/shared/interfaces";

export interface NewsFiltersProps {
	categories: CategoriesType[];
	filters: IFilters;
}

export interface NewsListProps {
	news?: INews[];
	type?: NewsType;
}
