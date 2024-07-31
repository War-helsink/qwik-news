import { component$ } from "@builder.io/qwik";

import type { ChipProps } from "../../model/props";
import styles from "./styles.module.scss";

export default component$<ChipProps>(
	({ text = "", active = false, onClick$ }) => {
		return (
			<>
				<div
					class={`flex justify-center min-w-fit p-2 m-1 rounded-full cursor-pointer text-sm bg-light-default ${active ? styles.active : ""}`}
					onClick$={onClick$}
				>
					{text}
				</div>
			</>
		);
	},
);
