import { component$, Slot} from "@builder.io/qwik";
import PaginationButtons from "../PaginationButtons";

import type { PaginationProps } from "../../model/props";

export default component$<PaginationProps>(
	({ top, bottom, changePageNumber$, ...paginationProps }) => {
		return (
			<>
				{top && <PaginationButtons changePageNumber$={(value)=> changePageNumber$(value)} {...paginationProps} />}
				<Slot />
				{bottom && <PaginationButtons changePageNumber$={(value)=> changePageNumber$(value)} {...paginationProps} />}
			</>
		);
	},
);
