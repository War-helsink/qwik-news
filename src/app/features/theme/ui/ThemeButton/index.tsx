import {
	component$,
	useContext,
	useSignal,
	useVisibleTask$,
} from "@builder.io/qwik";
import { ThemeContext } from "context";

import { getColorPreference, setPreference } from "../../utils";
import { IoMoonSolid, IoSunnySolid } from "@qwikest/icons/ionicons";

export default component$(() => {
	const buttonRef = useSignal<HTMLElement>();
	const theme = useContext(ThemeContext);

	useVisibleTask$(({ track }) => {
		const value = track(theme);

		if (value === null) {
			theme.value = getColorPreference();
			setPreference(theme.value);
			return
		}

		setPreference(value);
	});

	return (
		<ion-button
			ref={buttonRef}
			color="medium"
			shape="round"
			onClick$={() => (theme.value = !theme.value)}
		>
			<div slot="icon-only" class="text-2xl">
				{theme.value ? <IoSunnySolid /> : <IoMoonSolid />}
			</div>
		</ion-button>
	);
});
