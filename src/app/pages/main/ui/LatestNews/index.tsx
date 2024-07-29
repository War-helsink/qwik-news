import { component$ } from "@builder.io/qwik";

import { NewsList } from "app/widgets/news";
import { useGetLatestNews } from "routes";

export default component$(() => {
	const signal = useGetLatestNews();

	return (
		<section class="flex flex-col w-full gap-8">
			<NewsList
				type={"banner"}
				direction={"row"}
				news={signal.value ? signal.value.news : undefined}
			/>
		</section>
	);
});
