import type { INews } from "./types";
import type { NewsType } from "app/shared/interfaces";

export interface NewsCardProps {
	type: NewsType;
	item: INews;
}

export interface NewsDetailsProps {
	item: INews;
}