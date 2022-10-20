import React from "react";

const SearchStatus = ({ length }) => {
  const renderPhrase = (number) => {
    if ((number > 4 && number < 15) || number === 1) return "человек тусанет";
    if (number > 1 && number <= 4) return "человека тусанут";
  };

  return (
    <h2>
      <span className={"badge m-2 bg-" + (length > 0 ? "primary" : "danger")}>
        {length > 0
          ? `${length} ${renderPhrase(length)} с тобой сегодня`
          : "Никто с тобой не тусанет"}
      </span>
    </h2>
  );
};

export default SearchStatus;
