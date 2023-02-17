import { useState } from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const categoriesName = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];

  return (
    <div className='categories'>
      <ul>
        {categoriesName.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(index)}
            className={activeIndex === index ? 'active' : ''}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
