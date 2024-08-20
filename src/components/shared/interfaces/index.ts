import type { CategoriesType } from "components/entities/category";
import type { LanguageType } from "components/entities/language";

export type NewsType = "banner" | "item";
export type SkeletonType = "banner" | "item" | "chip";
export type DirectionType = "fullRow" | "row" | "column";

export interface IFilters {
	pageNumber: number;
	pageSize: number;
	category: CategoriesType;
	keywords: string;
	language: LanguageType;
}

export type ParamsType = Partial<IFilters>;
