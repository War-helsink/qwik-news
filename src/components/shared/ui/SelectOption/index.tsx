import { component$, $ } from "@builder.io/qwik";

import type { SelectOptionProps } from "../../model/props";

export const SelectOption = component$<SelectOptionProps>(
	({ value, label, active, onSelect$ }) => {
		const handleClick = $(() => {
			onSelect$ ? onSelect$(value) : null;
		});

		return (
			<li
				class={`${active ? "bg-primary-default text-active-text" : ""} relative cursor-pointer select-none py-2 px-3 hover:bg-primary-default hover:text-active-text`}
				onClick$={handleClick}
			>
				<span class="block truncate">{label}</span>
			</li>
		);
	},
);
