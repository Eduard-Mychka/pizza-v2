import { Pagination } from 'semantic-ui-react';

const Paginations = ({ onChangePage, currentPage }) => {
  return (
    <Pagination
      activePage={currentPage}
      firstItem={null}
      lastItem={null}
      pointing
      onPageChange={(event, data) => onChangePage(data.activePage)}
      secondary
      totalPages={3}
    />
  );
};

export default Paginations;
