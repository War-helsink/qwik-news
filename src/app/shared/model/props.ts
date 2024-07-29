import type { SkeletonType, DirectionType } from "app/shared/interfaces";

export interface SmartImageProps {
	src?: "None" | string;
	alt?: string;

	class?: string;
}

export interface SkeletonProps {
	count: number;
	type: SkeletonType;
	direction: DirectionType;
}

export interface ChipProps {
	active?: boolean;
	text?: string;
}
