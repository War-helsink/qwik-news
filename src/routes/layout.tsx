import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

import { Footer } from "app/widgets/footer";
import { Header } from "app/widgets/header";

export default component$(() => {
	return (
		<ion-app>
			<Header />

			<ion-content>
				<div class="min-h-full p-6">
					<Slot />
				</div>
				<Footer />
			</ion-content>
		</ion-app>
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
