import { Button } from 'semantic-ui-react';

const Categories = ({ value, onClickCategory }) => {
  const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];

  return (
    <div className='categories'>
      <Button.Group>
        {categories.map((categoriesName, index) => (
          <Button
            size='large'
            key={index}
            onClick={() => onClickCategory(index)}
            className={value === index ? 'active' : ''}
          >
            {categoriesName}
          </Button>
        ))}
      </Button.Group>
      <ul></ul>
    </div>
  );
};

export default Categories;
