import { component$, type Component } from "@builder.io/qwik";
import Skeleton from "app/shared/ui/Skeleton";
import type { SkeletonProps } from "app/shared/model/props";

import type { INews } from "app/entities/news";

export interface WithSkeletonProps {
	news?: INews[];
	type?: SkeletonProps["type"];
	direction?: SkeletonProps["direction"];
}

function withSkeleton<T extends object>(
	Component: Component<WithSkeletonProps & T>,
	count: SkeletonProps["count"],
) {
	return component$<WithSkeletonProps & T>((props) => {
		const { news, type = "item", direction = "column", ...restProps } = props;

		if (!news || news.length === 0) {
			return <Skeleton type={type} count={count} direction={direction} />;
		}

		return <Component type={type} news={news} {...(restProps as T)} />;
	});
}

export default withSkeleton;
