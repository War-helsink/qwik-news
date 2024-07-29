import { component$ } from "@builder.io/qwik";

import type { SkeletonProps } from "../../model/props";

import styles from "./styles.module.scss";

export default component$<SkeletonProps>(
	({ direction = "column", type = "banner", count = 1 }) => {
		return (
			<div class={styles[direction]}>
				{type === "banner" &&
					[...Array(count)].map((_, index) => (
						<ion-skeleton-text
							animated
							key={`key-li-${index}`}
							class="w-full pt-[100%] relative"
						/>
					))}

				{type === "item" &&
					[...Array(count)].map((_, index) => (
						<div key={`key-li-${index}`} class="flex w-full h-20 gap-3">
							<ion-skeleton-text animated class="w-16 h-16" />
							<div class="flex flex-col gap-2 w-9/12">
								<ion-skeleton-text animated class="h-6" />
								<ion-skeleton-text animated class="h-5 w-9/12" />
							</div>
						</div>
					))}

				{type === "chip" &&
					[...Array(count)].map((_, index) => (
						<ion-skeleton-text
							key={`key-li-${index}`}
							class="min-w-20 max-w-20 h-9 rounded-2xl"
							animated
						/>
					))}
			</div>
		);
	},
);
