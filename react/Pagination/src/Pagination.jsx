import React from 'react';

const Pagination = ({ goNext, goPrev, currentPage, totalItems }) => {
	// input: currentPage, itemsPerPage, usersCount
	// output: boolean
	const isFirstPage = currentPage === 1;
	const isLastPage = currentPage * 3 >= totalItems;

	return (
		<div className="pagination">
			<button className="btn" disabled={isFirstPage} onClick={goPrev}>
				{!isFirstPage ? '←' : ''}
			</button>

			<span className="pagination__page">{currentPage}</span>

			<button className="btn" disabled={isLastPage} onClick={goNext}>
				{!isLastPage ? '→' : ''}
			</button>
		</div>
	);
};

export default Pagination;
