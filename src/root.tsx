import { component$, useContextProvider, useSignal } from "@builder.io/qwik";
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "components/app/router-head";
import { isDev } from "@builder.io/qwik/build";

import { ThemeContext } from "components/app/context";

import "global.scss";

export default component$(() => {
	const theme = useSignal<boolean | undefined>(undefined);

	useContextProvider(ThemeContext, theme);

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
			</head>
			<body lang="en" class={"flex flex-col w-screen h-screen text-text-default bg-background-default"} >
				<RouterOutlet />
				{!isDev && <ServiceWorkerRegister />}
			</body>
		</QwikCityProvider>
	);
});
