import {
	component$,
	useStore,
	useContextProvider,
	Slot,
} from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { routeLoader$ } from '@builder.io/qwik-city';

import { Footer } from "app/widgets/footer";
import { Header } from "app/widgets/header";

import { PAGE_SIZE } from "app/shared/config";
import { NewsStore, type NewsStoreType } from "context";

import { getLatestNews } from "app/entities/news";
import { getCategories } from "app/entities/category";
import { getLanguages, type LanguagesType } from "app/entities/language";

export const useGetLatestNews = routeLoader$(async () => {
	return await getLatestNews();
});

export const useGetCategories = routeLoader$(async () => {
	return await getCategories();
});

export const useGetLanguages = routeLoader$(async () => {
	return await getLanguages() as LanguagesType;
});

export default component$(() => {
	const store = useStore<NewsStoreType>({
		currentNews: null,
		filters: {
			pageNumber: 1,
			pageSize: PAGE_SIZE,
			category: "regional",
			keywords: "",
			language: "en",
		},
	});

	useContextProvider(NewsStore, store);

	return (
		<>
			<Header />

			<div class="w-full h-full relative overflow-y-auto overscroll-y-contain">
				<div class="min-h-full p-6">
					<Slot />
				</div>
				<Footer />
			</div>
		</>
	);
});

export const onGet: RequestHandler = async ({ cacheControl }) => {
	// Control caching for this request for best performance and to reduce hosting costs:
	// https://qwik.dev/docs/caching/
	cacheControl({
		// Always serve a cached response by default, up to a week stale
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		// Max once every 5 seconds, revalidate on the server to get a fresh version of this page
		maxAge: 5,
	});
};
