import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { MainPage } from "app/pages/main";

export default component$(() => {
	return <MainPage />;
});

export const head: DocumentHead = {
	title: "NEWS",
	meta: [
		{
			name: "description",
			content: "Qwik site description",
		},
	],
};
