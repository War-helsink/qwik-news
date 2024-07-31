import { component$, useResource$ } from "@builder.io/qwik";

import { NewsListWithResourceLoading } from "app/widgets/news";
import { Pagination } from "app/features/pagination";

import { getNews } from "app/entities/news";

import type { NewsType, DirectionType } from "app/shared/interfaces";
import { MAX_PAGES, MIN_PAGES } from "app/shared/config";

import type { NewsListWithPaginationProps } from "../../model/props";

export default component$<NewsListWithPaginationProps>(({ filters }) => {
	const newsApiResponse = useResource$(async ({ track }) => {
		const params = track(filters);
		return (await getNews(params))?.news;
	});

	return (
		<Pagination
			top
			bottom
			changePageNumber$={(page) => (filters.pageNumber = page)}
			maxPages={MAX_PAGES}
			minPages={MIN_PAGES}
			currentPage={filters.pageNumber}
		>
			<NewsListWithResourceLoading
				type={"item" as NewsType}
				direction={"column" as DirectionType}
				value={newsApiResponse}
			/>
		</Pagination>
	);
});
