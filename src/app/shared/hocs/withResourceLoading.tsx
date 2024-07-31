import {
	component$,
	Resource,
	type ResourceReturn,
	type Component,
} from "@builder.io/qwik";
import Skeleton from "app/shared/ui/Skeletons";
import type { SkeletonsProps } from "app/shared/model/props";

export interface WithSkeletonProps<T = unknown> {
	type?: SkeletonsProps["type"];
	direction?: SkeletonsProps["direction"];

	value: ResourceReturn<T>;
}

function withResourceLoading<T extends object, K extends keyof T>(
	Component: Component<WithSkeletonProps & Omit<T, K>>,
	count: SkeletonsProps["count"],
    field: K, 
) {
	return component$<WithSkeletonProps & Omit<T, K>>((props) => {
		const { type = "item", direction = "column", value, ...restProps } = props;

		return (
			<Resource
				value={value}
				onPending={() => (
					<Skeleton type={type} count={count} direction={direction} />
				)}
				onResolved={(resolvedValue) => (
					<Component type={type} direction={direction} {...{ [field]: resolvedValue }} {...(restProps as T)} />
				)}
			/>
		);
	});
}

export default withResourceLoading;
