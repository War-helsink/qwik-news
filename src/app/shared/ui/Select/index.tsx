import { component$, useSignal, Slot, $ } from "@builder.io/qwik";

import type { SelectProps } from "../../model/props";
import { SelectOption } from "../SelectOption";

export const Select = component$<SelectProps>(
	({ value, options, onChange$, class: className = "" }) => {
		const isOpen = useSignal(false);
		const selectedValue = useSignal(value);

		const toggleOpen = $(() => {
			isOpen.value = !isOpen.value;
		});

		const handleSelect = $((newValue: SelectProps["value"]) => {
			selectedValue.value = newValue;
			onChange$ ? onChange$(newValue) : null;
			isOpen.value = false;
		});

		return (
			<>
				<div class="relative select-container">
					<button
						type="button"
						class={`${className} text-medium-default relative cursor-pointer p-3 after:absolute after:w-full after:h-full after:top-0 after:left-0 after:opacity-0 hover:after:bg-medium-default hover:after:opacity-5`}
						aria-haspopup="listbox"
						aria-expanded={isOpen.value}
						onClick$={toggleOpen}
					>
						<Slot name="label" />
					</button>

					<ul
						class={`${isOpen.value ? "opacity-100 scale-100" : "opacity-0 scale-95 -z-50"} transition-all ease-in-out duration-300 text-base z-50 absolute right-0 mt-1 max-h-[75vh] w-max min-w-44 overflow-y-auto rounded-md bg-background-shade shadow-full-2xl focus:outline-none`}
					>
						{options.map((option) => (
							<SelectOption
								key={option.value}
								label={option.label}
								value={option.value}
								active={option.value === selectedValue.value}
								onSelect$={() => handleSelect(option.value)}
							/>
						))}
					</ul>
				</div>
				<div
					onClick$={() => (isOpen.value = false)}
					class={`${isOpen.value ? "block" : "hidden"} fixed w-full h-full top-0 left-0 z-40 cursor-pointer`}
				/>
			</>
		);
	},
);
