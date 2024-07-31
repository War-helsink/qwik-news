import { component$, useComputed$ } from "@builder.io/qwik";

import { Search } from "app/features/search";
import { Slider } from "app/features/slider";
import { Categories } from "app/features/categories";

import type { NewsFiltersProps } from "../../model/props";
import styles from "./styles.module.scss";

export default component$<NewsFiltersProps>(({ filters, categories }) => {
	const isLoading = useComputed$(() => {
		return categories.length === 0;
	});

	return (
		<div class={styles.filters}>
			<Slider>
				<Categories
					type="chip"
					direction="fullRow"
					categories={categories}
					isLoading={isLoading.value}
					currentCategory={filters.category}
					setCategory$={(category) => (filters.category = category)}
				/>
			</Slider>

			<Search
				keywords={filters.keywords}
				setKeywords$={(keywords) => (filters.keywords = keywords)}
			/>
		</div>
	);
});
