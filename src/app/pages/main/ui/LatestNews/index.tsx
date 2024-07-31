import { component$, useComputed$} from "@builder.io/qwik";

import { NewsListWithSkeleton } from "app/widgets/news";
import { useGetLatestNews } from "routes";

export default component$(() => {
	const signal = useGetLatestNews();

	const isLoading = useComputed$(() => {
		return signal.value ? signal.value.news.length === 0 : true;
	});

	return (
		<section class="flex flex-col w-full gap-8">
			<NewsListWithSkeleton
				type={"banner"}
				direction={"row"}
				isLoading={isLoading.value}
				news={signal.value ? signal.value.news : undefined}
			/>
		</section>
	);
});
