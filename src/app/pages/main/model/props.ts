import type { INews } from "app/entities/news";
import type { IFilters } from "app/shared/interfaces";

export interface NewsByFiltersProps {
	filters: IFilters;
	news: INews[];
}

export interface NewsListWithPaginationProps {
	filters: IFilters;
	news: INews[];
	isLoading: boolean;
}
