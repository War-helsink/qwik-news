import type { PropFunction } from "@builder.io/qwik";
import type { SkeletonType, DirectionType } from "app/shared/interfaces";

export interface SmartImageProps {
	src?: "None" | string;
	alt?: string;

	class?: string;
}

export interface SelectProps<T = any> {
	class?: string;
	value: T;
	onChange$?: PropFunction<(value: T) => void>;

	options: SelectOptionProps<T>[];
}

export interface SelectOptionProps<T = any> {
	active?: boolean;
	label: string;
	value: T;
	onSelect$?: PropFunction<(value: T) => void>;
}

export interface SkeletonProps {
	class?: string;
}

export interface SkeletonsProps {
	count: number;
	type: SkeletonType;
	direction: DirectionType;
}

export interface ChipProps {
	active?: boolean;
	text?: string;

	onClick$?: PropFunction<() => void>;
}
