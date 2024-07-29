import { component$ } from "@builder.io/qwik";

import styles from "./styles.module.scss";

export default component$(() => {
	return (
		<ion-footer>
			<ion-toolbar class={styles.footer}>
				<div class="w-full flex flex-col justify-center items-center">
					<div class="text-2xl font-black">Watching news</div>
					<div class="text-sm font-light">©2024 watching news</div>
				</div>
			</ion-toolbar>
		</ion-footer>
	);
});
