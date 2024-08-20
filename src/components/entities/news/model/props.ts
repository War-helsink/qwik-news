import type { INews } from "./types";
import type { NewsType } from "components/shared/interfaces";

export interface NewsCardProps {
	type: NewsType;
	item: INews;
}