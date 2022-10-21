import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        key={"page-" + page}
                        className={
                            "page-item" +
                            (currentPage === page ? " active" : "")
                        }
                    >
                        <button
                            onClick={() => onPageChange(page)}
                            className="page-link"
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number,
    pageSize: PropTypes.number,
    currentPage: PropTypes.number,
    onPageChange: PropTypes.func
};

export default Pagination;
