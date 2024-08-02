import { component$, useComputed$ } from "@builder.io/qwik";

import { NewsListWithSkeleton } from "app/widgets/news";
import { useGetLatestNews } from "routes";

export default component$(() => {
	const news = useGetLatestNews();

	const isLoading = useComputed$(() => {
		return news.value ? news.value.length === 0 : true;
	});

	return (
		<section class="flex flex-col w-full gap-8">
			<NewsListWithSkeleton
				type={"banner"}
				direction={"row"}
				isLoading={isLoading.value}
				news={news.value ? news.value : undefined}
			/>
		</section>
	);
});
