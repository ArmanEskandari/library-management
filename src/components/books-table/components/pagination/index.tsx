import React from "react";
// Types
import type { FC } from "react";
import {ITEM_PER_PAGE} from "../../../../store/Table/table.constants";

interface Props {
    total: number;
    onClick: (page: number) => void;
    currentPage: number;
}
const styles = { overflow: "hidden" };
export const Pagination: FC<Props> = (props) => {
    const pageNumbers = React.useMemo(
        () => Array.from({ length: Math.ceil(props.total / ITEM_PER_PAGE) }, (_, index) => index + 1),
        [props.total],
    );

    return (
        <nav aria-label="Page navigation example" className="d-flex justify-content-center">
            <ul className="pagination" style={styles}>
                {pageNumbers.map((page) => (
                    <li key={page} className={`page-item ${props.currentPage === page ? `active` : ""}`}>
						<span className="page-link" onClick={() => props.onClick(page)}>
							{page}
						</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
