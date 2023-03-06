import { useState, useEffect, useContext } from 'react';

import Sort from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, seIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryId, setCategoryId] = useState(0);
  const [isSortType, setIsSortType] = useState({
    name: 'popularity',
    sortProperty: 'rating',
  });

  const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    seIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = isSortType.sortProperty.replace('-', '');
    const order = isSortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://63ece6a732a0811723a48188.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        seIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, isSortType, searchValue, currentPage]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
        <Sort value={isSortType} onClickSort={(obj) => setIsSortType(obj)} />
      </div>
      <h2 className='content__title'>All pizzas</h2>
      <div className='content__items'>{isLoading ? skeletons : pizzas}</div>
      <Pagination currentPage={currentPage} onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
