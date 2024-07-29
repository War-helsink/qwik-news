export interface LanguageApiResponse {
	languages: LanguagesType;
	description: string;
	status: string;
}

export type LanguagesType = {
	[key: string]: LanguageType;
};

export type LanguageType =
	| "ar"
	| "zh"
	| "cs"
	| "da"
	| "nl"
	| "en"
	| "fi"
	| "fr"
	| "de"
	| "el"
	| "hi"
	| "hu"
	| "it"
	| "ja"
	| "ko"
	| "msa"
	| "pt"
	| "ru"
	| "sr"
	| "es"
	| "th"
	| "tr"
	| "vi";
