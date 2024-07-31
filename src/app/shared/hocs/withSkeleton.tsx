import { component$, type Component } from "@builder.io/qwik";
import Skeleton from "app/shared/ui/Skeletons";
import type { SkeletonsProps } from "app/shared/model/props";

export interface WithSkeletonProps {
	type?: SkeletonsProps["type"];
	direction?: SkeletonsProps["direction"];

	isLoading: boolean;
}

function withSkeleton<T extends object>(
	Component: Component<WithSkeletonProps & T>,
	count: SkeletonsProps["count"],
) {
	return component$<WithSkeletonProps & T>((props) => {
		const { type = "item", direction = "column",  isLoading,...restProps } = props;

		if (isLoading) {
			return <Skeleton type={type} count={count} direction={direction} />;
		}

		return <Component type={type} direction={direction} {...(restProps as T)} />;
	});
}

export default withSkeleton;
