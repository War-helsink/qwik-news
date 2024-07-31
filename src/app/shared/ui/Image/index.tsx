import { component$, useSignal, $ } from "@builder.io/qwik";

import { IoWarningSharp } from "@qwikest/icons/ionicons";

import type { SmartImageProps } from "../../model/props";
import Skeleton from "../Skeleton";

export default component$<SmartImageProps>(({ src, alt, class: className }) => {
	const loaded = useSignal(src !== "None");
	const loadError = useSignal(src === "None");

	const onLoad = $(() => {
		loaded.value = true;
		loadError.value = false;
	});
	const onError = $(() => {
		loaded.value = false;
		loadError.value = true;
	});

	return (
		<div class={`relative w-full h-auto ${className}`}>
			<img
				class={`${loaded.value ? "block" : loadError.value ? "hidden" : "block"} absolute top-0 left-0 w-full h-full object-cover`}
				decoding="async"
				loading="lazy"
				src={src}
				alt={alt}
				onLoad$={onLoad}
				onError$={onError}
				width="50"
				height="50"
			/>

			<Skeleton
				class={`${loaded.value ? "hidden" : "block"} w-full h-full absolute top-0 left-0`}
			/>

			<div class="flex justify-center items-center absolute top-0 left-0 w-full h-full">
				<div
					class={`${loadError.value ? "block" : "hidden"} text-danger-default text-xl`}
				>
					<IoWarningSharp />
				</div>
			</div>
		</div>
	);
});
