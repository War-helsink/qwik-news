import { component$ } from "@builder.io/qwik";

import { NewsCard } from "components/entities/news";
import withSkeleton from "components/shared/hocs/withSkeleton";
import withResourceLoading from "components/shared/hocs/withResourceLoading";

import type { NewsListProps } from "../../model/props";
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

const NewsListWithSkeleton = withSkeleton<NewsListProps>(NewsList, 10);

const NewsListWithResourceLoading = withResourceLoading<NewsListProps, "news">(
	NewsList,
	10,
	"news",
);

export { NewsListWithSkeleton, NewsListWithResourceLoading };
