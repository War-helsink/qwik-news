import { createContextId, type Signal } from "@builder.io/qwik";

import type { IFilters } from "components/shared/interfaces";
import type { INews } from "components/entities/news";

export interface NewsStoreType {
	filters: IFilters;
	currentNews: INews | null;
}

export const NewsStore = createContextId<NewsStoreType>("site-store");
export const ThemeContext = createContextId<Signal<boolean | undefined>>("theme");
