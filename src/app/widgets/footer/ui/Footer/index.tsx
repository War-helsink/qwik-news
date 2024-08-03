import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<footer class="bg-background-shade shadow-ut-2xl mt-12">
			<div class="p-8">
				<div class="w-full flex flex-col justify-center items-center">
					<div class="text-2xl font-black">Watching news</div>
					<div class="text-sm font-light">©2024 watching news</div>
				</div>
			</div>
		</footer>
	);
});
