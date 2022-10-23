import { PaginationWrapper, PaginationCircle } from "./PaginationElements";

export const Pagination = (props) => {
  const pageNumbers = [...Array(props.nPages + 1).keys()].slice(1);
  return (
    <div>
      {pageNumbers.map((page) => {
        const active = props.currentPage === page ? true : false;
        return (
          <PaginationCircle
            onClick={() => props.setCurrentPage(page)}
            key={page}
            active={active}
          />
        );
      })}
    </div>
  );
};
