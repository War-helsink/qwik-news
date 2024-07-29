import { component$, useSignal, useComputed$ } from "@builder.io/qwik";

import { IoWarningSharp } from "@qwikest/icons/ionicons";

import type { SmartImageProps } from "../../model/props";

export default component$<SmartImageProps>(({ src, alt, class: className }) => {
	const imgRef = useSignal<HTMLElement>();

	const loadError = useComputed$(() => {
		return src === "None";
	});

	return (
		<div class={`relative w-full h-auto ${className}`}>
			<ion-img
				ref={imgRef}
				src={src}
				alt={alt}
				class={`${loadError.value ? "hidden" : "block"} absolute top-0 left-0 w-full h-full object-cover`}
			/>

			<ion-skeleton-text
				class={`${loadError.value ? "block" : "hidden"} absolute top-0 left-0 w-full h-full m-0`}
				animated
			/>

			<div class="flex justify-center items-center absolute top-0 left-0 w-full h-full">
				<div class={`${loadError.value ? "block" : "hidden"}  w-7 h-7`}>
					<IoWarningSharp />
				</div>
			</div>
		</div>
	);
});
