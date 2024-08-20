import { component$ } from "@builder.io/qwik";

import Chip from "components/shared/ui/Chip";
import Skeleton from "components/shared/ui/Skeletons";

import type {
	CategoriesWithSkeletonProps,
	CategoriesProps,
} from "../../model/props";

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

const CategoriesWithSkeleton = component$<CategoriesWithSkeletonProps>(
	(props) => {
		const {
			type = "item",
			direction = "column",
			isLoading,
			...restProps
		} = props;

		if (isLoading) {
			return <Skeleton type={type} count={10} direction={direction} />;
		}

		return <Categories {...(restProps as CategoriesProps)} />;
	},
);

export default CategoriesWithSkeleton;
