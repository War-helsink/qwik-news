import { themeStorageKey } from "../config";

export const getColorPreference = (): boolean => {
	const theme = localStorage.getItem(themeStorageKey);
	if (theme) {
		return JSON.parse(theme) as boolean;
	}
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
	return prefersDark.matches;
};

export const setPreference = (theme: boolean) => {
	localStorage.setItem("theme", JSON.stringify(theme));
};
