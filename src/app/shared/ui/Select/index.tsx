import { component$, useStore, Slot, $ } from "@builder.io/qwik";

import type { SelectProps } from "../../model/props";
import { SelectOption } from "../SelectOption";

export const Select = component$<SelectProps>(
	({ value, options, onChange$, class: className = "" }) => {
		const state = useStore({ isOpen: false, selectedValue: value });
		const toggleOpen = $(() => {
			state.isOpen = !state.isOpen;
		});

		const handleSelect = $((newValue: SelectProps["value"]) => {
			state.selectedValue = newValue;
			onChange$ ? onChange$(newValue) : null;
			state.isOpen = false;
		});

		return (
			<>
				<div class="relative select-container">
					<button
						type="button"
						class={`${className} text-medium-default relative cursor-pointer p-3 after:absolute after:w-full after:h-full after:top-0 after:left-0 after:opacity-0 hover:after:bg-medium-default hover:after:opacity-5`}
						aria-haspopup="listbox"
						aria-expanded={state.isOpen}
						onClick$={toggleOpen}
					>
						<Slot name="label" />
					</button>

					<ul
						class={`${state.isOpen ? "block" : "hidden"} text-base z-50 absolute right-0 mt-1 max-h-[75vh] w-max overflow-y-auto rounded-md bg-background-shade shadow-lg ring-1 ring-border-default ring-opacity-5 focus:outline-none`}
					>
						{options.map((option) => (
							<SelectOption
								key={option.value}
								label={option.label}
								value={option.value}
								active={option.value === state.selectedValue}
								onSelect$={() => handleSelect(option.value)}
							/>
						))}
					</ul>
				</div>
				<div
					onClick$={() => (state.isOpen = false)}
					class={`${state.isOpen ? "block" : "hidden"} fixed w-full h-full top-0 left-0 z-40`}
				/>
			</>
		);
	},
);
