import { component$, $ } from "@builder.io/qwik";

import type { SelectOptionProps } from "../../model/props";

export const SelectOption = component$<SelectOptionProps>(
	({ value, label, active, onSelect$ }) => {
		const handleClick = $(() => {
			onSelect$ ? onSelect$(value) : null;
		});

		return (
			<li
				class={`${active ? "bg-background-default" : ""} relative cursor-pointer select-none py-2 px-3 hover:bg-background-default`}
				onClick$={handleClick}
			>
				<span class="block truncate">{label}</span>
			</li>
		);
	},
);
