import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from '@builder.io/qwik-city';
import type { DocumentHead } from "@builder.io/qwik-city";

import { getLatestNews } from "app/entities/news";
import { MainPage } from "app/pages/main";

export const useGetLatestNews = routeLoader$(async () => {
	return await getLatestNews();
});

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
