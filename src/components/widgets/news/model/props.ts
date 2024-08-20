import type { INews } from "components/entities/news";
import type { CategoriesType } from "components/entities/category";

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
