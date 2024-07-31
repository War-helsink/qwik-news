import type { PropFunction } from "@builder.io/qwik";

export interface PaginationProps extends PaginationButtonsProps {
	top: boolean;
	bottom: boolean;
}

export interface PaginationButtonsProps {
	changePageNumber$: PropFunction<(value: number) => void>;
	maxPages: number;
	minPages: number;
	currentPage: number;
}
