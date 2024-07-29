import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import { formatDate } from "app/shared/helpers";
import { GITHUB_URL } from "app/shared/config";

import { IoLogoGithub } from "@qwikest/icons/ionicons";
import { ThemeButton } from "app/features/theme";

import styles from "./styles.module.scss";

export default component$(() => {
	return (
		<ion-header>
			<ion-toolbar class={styles.header}>
				<ion-buttons slot="start">
					<Link href={"/"}>
						<ion-button color="dark">
							<div class="flex flex-col items-start">
								<h1 class="text-3xl font-bold">News</h1>
								<p class="text-base font-medium">{formatDate(new Date())}</p>
							</div>
						</ion-button>
					</Link>
				</ion-buttons>

				<div class={styles.navbar} slot="end" />

				<ion-buttons slot="end">
					<ThemeButton />
					<ion-button
						color="medium"
						shape="round"
						target="_blank"
						href={GITHUB_URL}
					>
						<div slot="icon-only" class="text-2xl">
							<IoLogoGithub  />
						</div>
					</ion-button>
				</ion-buttons>
			</ion-toolbar>
		</ion-header>
	);
});
