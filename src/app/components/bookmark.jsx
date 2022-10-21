import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ status, onToggleBookmark, id }) => {
    return (
        <button onClick={() => onToggleBookmark(id)}>
            <i className={"bi bi-bookmark" + (status ? "-heart-fill" : "")} />
        </button>
    );
};

Bookmark.propTypes = {
    status: PropTypes.bool,
    onToggleBookmark: PropTypes.func,
    id: PropTypes.string
};

export default Bookmark;
