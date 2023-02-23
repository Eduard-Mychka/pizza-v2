const Categories = ({ value, onClickCategory }) => {
  const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];

  return (
    <div className='categories'>
      <ul>
        {categories.map((categoriesName, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={value === index ? 'active' : ''}
          >
            {categoriesName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
