import { component$, Resource } from "@builder.io/qwik";

import { NewsCard } from "components/entities/news";
import Skeleton from "components/shared/ui/Skeletons";

import type {
	NewsListProps,
	NewsListWithSkeletonProps,
	NewsListResourceLoadingProps,
} from "../../model/props";
import styles from "./styles.module.scss";

const NewsList = component$<NewsListProps>(({ type = "item", news }) => {
	return (
		<ul class={styles[`${type}s`]}>
			{news?.map((item) => (
				<NewsCard key={item.id} type={type} item={item} />
			))}
		</ul>
	);
});

const NewsListWithSkeleton = component$<NewsListWithSkeletonProps>((props) => {
	const {
		type = "item",
		direction = "column",
		isLoading,
		...restProps
	} = props;

	if (isLoading) {
		return <Skeleton type={type} count={10} direction={direction} />;
	}

	return <NewsList type={type} {...(restProps as NewsListProps)} />;
});

const NewsListWithResourceLoading = component$<NewsListResourceLoadingProps>(
	(props) => {
		const { type = "item", direction = "column", value, ...restProps } = props;

		return (
			<Resource
				value={value}
				onPending={() => (
					<Skeleton type={type} count={10} direction={direction} />
				)}
				onResolved={(resolvedValue) => (
					<NewsList
						type={type}
						news={resolvedValue}
						{...(restProps as NewsListProps)}
					/>
				)}
			/>
		);
	},
);

export { NewsListWithSkeleton, NewsListWithResourceLoading };
