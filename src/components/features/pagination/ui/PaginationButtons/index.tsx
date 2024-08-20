import {
	component$,
	useComputed$,
	useSignal,
	$,
	useTask$,
} from "@builder.io/qwik";
import { IoArrowBack, IoArrowForward } from "@qwikest/icons/ionicons";

import type { PaginationButtonsProps } from "../../model/props";

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

		const style = {
			default:
				"text-text-step-400 border-transparent hover:text-text-step-200 hover:border-border-default",
			disabled: "text-primary-default border-primary-default",
		};

		return (
			<nav class="border-y border-border-default w-full flex justify-between items-center">
				<div class="flex-1 flex w-0 my-[-1px] h-[60px]">
					<button
						type="button"
						class={`hidden lg:flex items-center gap-3 text-sm font-medium py-4 pr-2 border-y-2 ${current.value === min.value ? style.disabled : style.default}`}
						onClick$={() => prevPage()}
						disabled={current.value === min.value}
					>
						<div
							class={
								current.value === min.value
									? "text-primary-default"
									: "text-text-step-400"
							}
						>
							<IoArrowBack />
						</div>
						Previous
					</button>
				</div>

				<div class="flex-1 flex justify-center w-0 my-[-1px] h-[60px] z-10">
					<button
						class={`${current.value - 2 > min.value ? "block" : "hidden"} text-sm font-medium py-4 px-4 border-y-2 ${style.default}`}
						type="button"
						onClick$={() => {
							selectPage(min.value);
						}}
					>
						<span>{min.value}</span>
					</button>

					<button
						disabled
						class={`${current.value - 2 > min.value + 1 ? "block" : "hidden"} text-sm font-medium py-4 px-4`}
						type="button"
					>
						<span>...</span>
					</button>

					{pageNumbers.value.map((pageNumber) => (
						<button
							key={pageNumber}
							class={`text-sm font-medium py-4 px-4 border-y-2 ${pageNumber === current.value ? style.disabled : style.default}`}
							disabled={pageNumber === current.value}
							type="button"
							onClick$={() => selectPage(pageNumber)}
						>
							<span>{pageNumber}</span>
						</button>
					))}

					<button
						disabled
						class={`${current.value + 2 < max.value - 1 ? "block" : "hidden"} text-sm font-medium py-4 px-4`}
						type="button"
					>
						<span>...</span>
					</button>

					<button
						type="button"
						class={`${current.value + 2 < max.value ? "block" : "hidden"} text-sm font-medium py-4 px-4 border-y-2 ${style.default}`}
						onClick$={() => {
							selectPage(max.value);
						}}
					>
						<span class="text-base">{max.value}</span>
					</button>
				</div>

				<div class="flex-1 flex justify-end w-0 my-[-1px] h-[60px]">
					<button
						type="button"
						class={`hidden lg:flex items-center gap-3 text-sm font-medium py-4 pl-2 border-y-2 ${current.value === max.value ? style.disabled : style.default}`}
						onClick$={() => nextPage()}
						disabled={current.value === max.value}
					>
						Next
						<div
							class={
								current.value === max.value
									? "text-primary-default"
									: "text-text-step-400"
							}
						>
							<IoArrowForward />
						</div>
					</button>
				</div>
			</nav>
		);
	},
);
