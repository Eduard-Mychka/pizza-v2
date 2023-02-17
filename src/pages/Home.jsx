import { useState, useEffect } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, seIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://63ece6a732a0811723a48188.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        seIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories />
        <Sort />
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
