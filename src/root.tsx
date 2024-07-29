import {
	component$,
	useContextProvider,
	useStore,
	useSignal,
} from "@builder.io/qwik";
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "components/router-head/router-head";
import { isDev } from "@builder.io/qwik/build";

import { PAGE_SIZE } from "app/shared/config";

import { GlobalStore, ThemeContext, type SiteStore } from "context";

import "global.scss";

export default component$(() => {
	const store = useStore<SiteStore>({
		news: [],
		currentNews: null,
		filters: {
			pageNumber: 1,
			pageSize: PAGE_SIZE,
			category: "regional",
			keywords: "",
			language: "en",
		},
	});
	const theme = useSignal<boolean | null>(null);

	useContextProvider(ThemeContext, theme);
	useContextProvider(GlobalStore, store);

	return (
		<QwikCityProvider>
			<head>
				<meta charset="utf-8" />
				{!isDev && (
					<link
						rel="manifest"
						href={`${import.meta.env.BASE_URL}manifest.json`}
					/>
				)}
				<RouterHead />

				<script
					type="module"
					src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"
				/>
				<script
					nomodule
					src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"
				/>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"
				/>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/@ionic/core/css/palettes/dark.class.css"
				/>
			</head>
			<body lang="en">
				<RouterOutlet />
				{!isDev && <ServiceWorkerRegister />}
			</body>
		</QwikCityProvider>
	);
});
