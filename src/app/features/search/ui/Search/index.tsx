import { component$, type PropFunction } from "@builder.io/qwik";

interface SearchProps {
	keywords: string;
	setKeywords$: PropFunction<(keywords: string) => void>;
}

export default component$<SearchProps>(({ keywords, setKeywords$ }) => {
	return (
		<div class="w-hull">
			<input
				class="text-dark-default bg-transparent block w-full border border-border-default border-solid rounded-xl appearance-none p-4 placeholder:text-medium-default hover:border-dark-default focus:outline-none focus:border-primary-default"
				type="text"
				placeholder="Search"
				value={keywords}
				onChange$={(_, el) => {
					setKeywords$(el.value);
				}}
			/>
		</div>
	);
});
