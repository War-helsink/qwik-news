import { component$, type Component } from "@builder.io/qwik";
import Skeleton from "components/shared/ui/Skeletons";
import type { SkeletonsProps } from "components/shared/model/props";

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
		const {
			type = "item",
			direction = "column",
			isLoading,
			...restProps
		} = props;

		if (isLoading) {
			return <Skeleton type={type} count={count} direction={direction} />;
		}

		return (
			<Component
				type={type}
				count={count}
				isLoading={isLoading}
				{...(restProps as T)}
			/>
		);
	});
}

export default withSkeleton;
