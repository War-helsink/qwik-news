import { component$ } from "@builder.io/qwik";

import type { SkeletonProps } from "../../model/props";
import styles from "./styles.module.scss";

export default component$<SkeletonProps>(({ class: className = "" }) => {
	return <div class={`${className} ${styles.animated}`} />;
});
