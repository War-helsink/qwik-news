import { component$, type PropFunction } from "@builder.io/qwik";

interface SearchProps {
	keywords: string;
	setKeywords$: PropFunction<(keywords: string) => void>;
}

export default component$<SearchProps>(({ keywords, setKeywords$ }) => {
	return (
		<div class="w-hull">
			<input
				class="text-dark-default bg-light-default block w-full border border-light-default border-solid rounded-xl appearance-none p-4 text-base placeholder:text-medium-default focus:outline-none"
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
