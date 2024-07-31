import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
			<div class="text-center">
				<p class="text-base font-semibold text-tertiary-default">404</p>
				<h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
					Page not found
				</h1>
				<p class="mt-6 text-base leading-7 text-gray-600">
					Sorry, we couldn’t find the page you’re looking for.
				</p>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<Link
						href="/"
						class="rounded-md bg-tertiary-default px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-tertiary-tint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary-default"
					>
						Go back home
					</Link>
				</div>
			</div>
		</main>
	);
});
