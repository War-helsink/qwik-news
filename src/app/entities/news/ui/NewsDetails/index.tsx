import Chip from "app/shared/ui/Chip";
import SmartImage from "app/shared/ui/Image";
import { formatTimeAgo } from "app/shared/helpers";

import type { NewsDetailsProps } from "../../model/props";

const NewsDetails = ({ item }: NewsDetailsProps) => {
	return (
		<div class="grid grid-cols-1 md:grid-cols-2">
			<SmartImage class="pt-[100%]" src={item.image} />

			<div class="p-5 md:px-5 md:py-0">
				<p>
					{item.description} ({item.language})
					<ion-button
						class="block w-fit"
						target="_blank"
						rel="noreferrer"
						shape="round"
						href={item.url}
					>
						Read more...
					</ion-button>
				</p>
				<p class="text-xs text-medium-default mb-2">
					{formatTimeAgo(item.published)} by {item.author}
				</p>

				<div class="flex flex-wrap">
					{item.category.map((category) => {
						return <Chip key={category} text={category} active />;
					})}
				</div>
			</div>
		</div>
	);
};

export default NewsDetails;
