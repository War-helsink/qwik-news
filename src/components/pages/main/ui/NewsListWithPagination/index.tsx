import { component$, useResource$ } from "@builder.io/qwik";

import { NewsListWithResourceLoading } from "components/widgets/news";
import { Pagination } from "components/features/pagination";

import { getNews } from "components/entities/news";

import { MAX_PAGES, MIN_PAGES } from "components/shared/config";

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
				type={"item"}
				direction={"column"}
				value={newsApiResponse}
			/>
		</Pagination>
	);
});
