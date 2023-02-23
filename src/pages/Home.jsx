import { useState, useEffect } from 'react';

import Sort from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, seIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [isSortType, setIsSortType] = useState({
    name: 'popularity',
    sortProperty: 'rating',
  });

  useEffect(() => {
    seIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = isSortType.sortProperty.replace('-', '');
    const order = isSortType.sortProperty.includes('-') ? 'asc' : 'desc';

    fetch(
      `https://63ece6a732a0811723a48188.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        seIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, isSortType]);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
        <Sort value={isSortType} onClickSort={(obj) => setIsSortType(obj)} />
      </div>
      <h2 className='content__title'>All pizzas</h2>
      <div className='content__items'>
        {isLoading
          ? // eslint-disable-next-line
            [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
