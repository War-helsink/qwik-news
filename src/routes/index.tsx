import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { MainPage } from "components/pages/main";

export default component$(() => {
	return <MainPage />;
});

export const head: DocumentHead = {
	title: "NEWS",
	meta: [
		{
			name: "description",
			content: "Watch news from around the world!",
		},
	],
};
