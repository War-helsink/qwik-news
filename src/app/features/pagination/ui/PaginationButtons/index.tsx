import {
	component$,
	useComputed$,
	useSignal,
	$,
	useTask$,
} from "@builder.io/qwik";
import { IoArrowBack, IoArrowForward } from "@qwikest/icons/ionicons";

import type { PaginationButtonsProps } from "../../model/props";
import styles from "./styles.module.scss";

export default component$<PaginationButtonsProps>(
	({ currentPage, minPages, maxPages, changePageNumber$ }) => {
		const min = useSignal(minPages);
		const max = useSignal(maxPages);
		const current = useSignal(currentPage);

		useTask$(({ track }) => {
			track(() => currentPage);
			current.value = currentPage;
		});

		const pageNumbers = useComputed$(() => {
			const pages = [];
			for (let i = -2; i <= 2; i++) {
				const page = current.value + i;
				if (page >= min.value && page <= max.value) {
					pages.push(page);
				}
			}
			return pages;
		});

		const nextPage = $(() => {
			if (current.value < max.value) {
				changePageNumber$(current.value + 1);
			}
		});

		const prevPage = $(() => {
			if (current.value > min.value) {
				changePageNumber$(current.value - 1);
			}
		});

		const selectPage = $((currentPage: number) => {
			changePageNumber$(currentPage);
		});

		return (
			<div class="w-full flex justify-center items-center gap-1.5">
				<button
					type="button"
					onClick$={() => prevPage()}
					disabled={current.value === 1}
					class={`hidden lg:flex items-center justify-center ${styles.button} ${
						current.value === 1 ? styles.active : ""
					}`}
				>
					<div class="text-base">
						<IoArrowBack />
					</div>
				</button>

				{current.value - 2 > min.value && (
					<button
						class={`${styles.button} flex items-center justify-center`}
						type="button"
						onClick$={() => {
							selectPage(min.value);
						}}
					>
						<span>{min.value}</span>
					</button>
				)}

				{current.value - 2 > min.value + 1 && (
					<button
						disabled
						class={`${styles.button} flex items-center justify-center`}
						type="button"
					>
						<span>...</span>
					</button>
				)}

				{pageNumbers.value.map((pageNumber) => (
					<button
						key={pageNumber}
						class={`${styles.button} flex items-center justify-center ${
							pageNumber === current.value ? styles.active : ""
						}`}
						disabled={pageNumber === current.value}
						type="button"
						onClick$={() => selectPage(pageNumber)}
					>
						<span>{pageNumber}</span>
					</button>
				))}

				{current.value + 2 < max.value - 1 && (
					<button
						disabled
						class={`${styles.button} flex items-center justify-center`}
						type="button"
					>
						<span>...</span>
					</button>
				)}

				{current.value + 2 < max.value && (
					<button
						class={`${styles.button} flex items-center justify-center`}
						type="button"
						onClick$={() => {
							selectPage(max.value);
						}}
					>
						<span class="text-base">{max.value}</span>
					</button>
				)}

				<button
					type="button"
					onClick$={() => nextPage()}
					disabled={current.value === max.value}
					class={`hidden lg:flex items-center justify-center ${styles.button} ${current.value === max.value ? styles.active : ""}`}
				>
					<div class="text-base">
						<IoArrowForward />
					</div>
				</button>
			</div>
		);
	},
);
