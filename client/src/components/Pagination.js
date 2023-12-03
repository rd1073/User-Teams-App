import React from 'react';
import "./Pagination.css";


const Pagination = ({ page, pages, changePage }) => {
    return (
        pages > 1 && (
          <div className="pagination">
            <button
              className="pagination__prev"
              onClick={() => changePage((page) => page - 1)}
              disabled={page === 1}
            >
              &#171;
            </button>
            {/*middlePagination*/}
            <button
              className="pagination__next"
              onClick={() => changePage((page) => page + 1)}
              disabled={page === pages}
            >
              &#187;
            </button>
          </div>
        )
      );
    };
export default Pagination
