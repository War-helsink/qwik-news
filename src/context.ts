import { createContextId, type Signal } from "@builder.io/qwik";

import type { IFilters } from "app/shared/interfaces";
import type { INews } from "app/entities/news";

export interface NewsStoreType {
	filters: IFilters;
	currentNews: INews | null;
}

export const NewsStore = createContextId<NewsStoreType>("site-store");
export const ThemeContext = createContextId<Signal<boolean | undefined>>("theme");
