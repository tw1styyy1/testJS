import React from "react";

function Pagination({totalPages, page, setPage}) {

    return (
        <div className="pagination">
            <button onClick={() => {
                setPage(page - 1);
            }}>prev
            </button>
            {
                Array.from({length: totalPages}).map((item, index) => (
                    <button
                        className={index === page ? 'active_btn' : 'btn'}
                        onClick={() => {
                            setPage(index);
                        }}
                        key={index}>
                        {index + 1}
                    </button>
                ))
            }
            <button onClick={() => {
                setPage(page + 1);
            }}>next
            </button>
        </div>
    )
}

export {Pagination}