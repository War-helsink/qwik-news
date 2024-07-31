import { component$ } from "@builder.io/qwik";

import type { SkeletonsProps } from "../../model/props";

import styles from "./styles.module.scss";
import Skeleton from "../Skeleton";

export default component$<SkeletonsProps>(
	({ direction = "column", type = "banner", count = 1 }) => {
		return (
			<div class={styles[direction]}>
				{type === "banner" &&
					[...Array(count)].map((_, index) => (
						<Skeleton
							key={`key-li-${index}`}
							class="w-full pt-[100%] relative"
						/>
					))}

				{type === "item" &&
					[...Array(count)].map((_, index) => (
						<div key={`key-li-${index}`} class="flex w-full h-20 gap-3">
							<Skeleton class="w-16 h-16" />
							<div class="flex flex-col gap-2 w-9/12">
								<Skeleton class="h-6" />
								<Skeleton class="h-5 w-9/12" />
							</div>
						</div>
					))}

				{type === "chip" &&
					[...Array(count)].map((_, index) => (
						<Skeleton
							key={`key-li-${index}`}
							class="min-w-[80px] max-w-[80px] h-9 rounded-2xl"
						/>
					))}
			</div>
		);
	},
);
