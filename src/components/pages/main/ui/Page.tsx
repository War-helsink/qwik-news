import { component$ } from "@builder.io/qwik";

import LatestNews from "./LatestNews";
import NewsByFilters from "./NewsByFilters";

export default component$(() => {
	return (
		<main class="grid w-full gap-8 md:grid-cols-2 grid-cols-1">
			<LatestNews />

			<NewsByFilters />
		</main>
	);
});
