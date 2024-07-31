import { component$, useContext } from "@builder.io/qwik";
import { NewsStore } from "context";

import { useGetCategories } from "routes";
import { NewsFilters } from "app/widgets/news";


import NewsListWithPagination from "../NewsListWithPagination";

export default component$(() => {
	const state = useContext(NewsStore);
	const categories = useGetCategories();

	return (
		<section class="w-full flex flex-col gap-8 truncate">
			<NewsFilters
				filters={state.filters}
				categories={categories.value ? categories.value.categories : []}
			/>

			<NewsListWithPagination
				filters={state.filters}
			/>
		</section>
	);
});
