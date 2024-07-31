import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { ThemeContext } from "context";

import { getColorPreference, setPreference } from "../../utils";
import { IoMoonSolid, IoSunnySolid } from "@qwikest/icons/ionicons";

export default component$(() => {
	const theme = useContext(ThemeContext);

	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(({ track }) => {
		const value = track(theme);

		if (value === null) {
			theme.value = getColorPreference();
			setPreference(theme.value);
			return;
		}

		setPreference(value);
	});

	return (
		<>
			<button
				type="button"
				class="text-medium-default relative p-3 rounded-full after:absolute after:rounded-full after:w-full after:h-full after:top-0 after:left-0 after:opacity-0 hover:after:bg-medium-default hover:after:opacity-5"
				onClick$={() => (theme.value = !theme.value)}
			>
				<div class="text-2xl">
					{theme.value ? <IoSunnySolid /> : <IoMoonSolid />}
				</div>
			</button>
		</>
	);
});
