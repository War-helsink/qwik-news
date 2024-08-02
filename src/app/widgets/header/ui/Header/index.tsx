import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import { formatDate } from "app/shared/helpers";
import { GITHUB_URL } from "app/shared/config";

import { IoLogoGithub } from "@qwikest/icons/ionicons";
import { LanguageButton } from "app/features/language";
import { ThemeButton } from "app/features/theme";

export default component$(() => {
	return (
		<header class="bg-background-shade shadow-2xl">
			<nav class="py-3 px-6 flex justify-between">
				<ul class="flex items-center">
					<Link href={"/"}>
						<button
							type="button"
							class="relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:opacity-0 hover:after:bg-medium-default hover:after:opacity-5"
						>
							<div class="flex flex-col items-start">
								<h1 class="text-3xl font-bold">News</h1>
								<p class="text-base font-medium">{formatDate(new Date())}</p>
							</div>
						</button>
					</Link>
				</ul>

				<ul class="flex items-center">
					<div class="h-8 w-px mx-2 bg-medium-default opacity-25" />
					<LanguageButton />

					<ThemeButton />
					<Link target="_blank" href={GITHUB_URL}>
						<button
							type="button"
							class="text-medium-default relative p-3 rounded-full after:absolute after:rounded-full after:w-full after:h-full after:top-0 after:left-0 after:opacity-0 hover:after:bg-medium-default hover:after:opacity-5"
						>
							<div class="text-2xl">
								<IoLogoGithub />
							</div>
						</button>
					</Link>
				</ul>
			</nav>
		</header>
	);
});
