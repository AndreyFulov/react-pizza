import React from 'react';
import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { changeCurrentPage } from '../../redux/slices/filterSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(value) => {
        dispatch(changeCurrentPage(value.selected));
      }}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
