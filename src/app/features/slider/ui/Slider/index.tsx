import { component$, useSignal, Slot, $ } from "@builder.io/qwik";

import type { SliderProps } from "../../model/props";
import styles from "./styles.module.scss";

import { IoArrowBack, IoArrowForward } from "@qwikest/icons/ionicons";

export default component$<SliderProps>(({ step = 150 }) => {
	const sliderRef = useSignal<HTMLDivElement>();

	const scrollLeft = $(() => {
		if (sliderRef.value) {
			sliderRef.value.scrollLeft -= step;
		}
	});

	const scrollRight = $(() => {
		if (sliderRef.value) {
			sliderRef.value.scrollLeft += step;
		}
	});

	return (
		<div class="w-full flex items-center gap-2">
			<button type="button" onClick$={scrollLeft} class={styles.arrow}>
				<div class="text-base">
					<IoArrowBack />
				</div>
			</button>

			<div
				ref={sliderRef}
				class={`flex w-full gap-2 items-start box-border overflow-x-auto whitespace-nowrap ${styles["scrollbar-hidden"]}`}
			>
				<Slot />
			</div>

			<button type="button" onClick$={scrollRight} class={styles.arrow}>
				<div class="text-base">
					<IoArrowForward />
				</div>
			</button>
		</div>
	);
});
