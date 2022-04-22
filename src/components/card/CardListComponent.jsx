import React from "react";

const CardListComponent = ({
  children,
  title,
  isSplited = true,
}) => {
  return (
    <div
      className={
        "card-list d-flex justify-content-start flex-column my-0 px-0 h-100" +
        (isSplited ? " col-6 " : " col-12 ")
      }
    >
      <h1 className={"mx-3 mt-2"}>{title}</h1>
      <div className="row justify-content-start flex-row pt-2 mx-0 w-100 overflow-y-auto px-2 flex-grow-1">
        {children}
      </div>
    </div>
  );
};

export default CardListComponent;
