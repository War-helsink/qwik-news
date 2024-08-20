import { component$ } from "@builder.io/qwik";

import { formatTimeAgo } from "components/shared/helpers";
import SmartImage from "components/shared/ui/Image";

import type { NewsCardProps } from "../../model/props";

export default component$<NewsCardProps>(({ type = "item", item }) => {
	const containerClasses =
		type === "banner" ? "flex flex-col gap-3 w-full" : "flex gap-3 w-full";
	const imageClasses =
		type === "banner"
			? "pt-[100%]"
			: "min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px]";

	return (
		<div class={`${containerClasses} justify-between`}>
			<div class={containerClasses}>
				<SmartImage src={item.image} class={imageClasses} />

				<div class="flex flex-col gap-2">
					<h3 class={`${type === "banner" ? "text-base" : "text-sm"}`}>
						{item.title}
					</h3>
					<p class="text-xs text-medium-default mb-2">
						{formatTimeAgo(item.published)} by {item.author}
					</p>
				</div>
			</div>
		</div>
	);
});
