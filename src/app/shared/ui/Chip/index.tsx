import { component$} from "@builder.io/qwik";

import type { ChipProps } from "../../model/props";
import styles from "./styles.module.scss";

export default component$<ChipProps>(
	({ text = "", active = false }) => {
		return (
			<ion-chip
				class={`flex justify-center min-w-fit p-2 m-1 ${active ? styles.active : ""}`}
			>
				{text}
			</ion-chip>
		);
	},
);
