import { component$ } from "@builder.io/qwik";

import Chip from "app/shared/ui/Chip";
import withSkeleton from "app/shared/hocs/withSkeleton";

import type { CategoriesProps } from "../../model/props";

const Categories = component$<CategoriesProps>(
	({ categories, currentCategory, setCategory$ }) => {
		return (
			<div class="flex gap-2 items-start">
				{categories.map((category) => (
					<Chip
						key={category}
						text={category}
						active={currentCategory === category}
						onClick$={() => setCategory$(category)}
					/>
				))}
			</div>
		);
	},
);

const CategoriesWithSkeleton = withSkeleton(Categories, 15);

export default CategoriesWithSkeleton;
