import { component$, useContext } from "@builder.io/qwik";
import { IoLanguageSolid } from "@qwikest/icons/ionicons";

import { useGetLanguages } from "routes/layout";
import { NewsStore } from "context";

import { Select } from "app/shared/ui/Select";

export default component$(() => {
	const state = useContext(NewsStore);
	const languages = useGetLanguages();

	return (
		<Select
			class="rounded-full after:rounded-full"
			value={state.filters.language}
			onChange$={(value) => (state.filters.language = value)}
			options={Object.entries(languages.value).map(([language, key]) => {
				return {
					value: key,
					label: language,
				};
			})}
		>
			<span q:slot="label" class="text-2xl flex justify-center items-center">
				<IoLanguageSolid />
			</span>
		</Select>
	);
});
