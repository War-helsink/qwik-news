import { createContextId, type Signal } from "@builder.io/qwik";

import type { IFilters } from "app/shared/interfaces";
import type { INews } from "app/entities/news";

export interface SiteStore {
	news: INews[];
	filters: IFilters;
	currentNews: INews | null;
}

export const GlobalStore = createContextId<SiteStore>("site-store");
export const ThemeContext = createContextId<Signal<boolean | null>>("theme");
