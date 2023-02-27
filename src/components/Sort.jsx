import { useState } from 'react';
import { Icon } from 'semantic-ui-react';

function Sort({ value, onClickSort }) {
  const [isVisible, setIsVisible] = useState(false);

  const sortList = [
    { name: 'popularity (DESC)', sortProperty: 'rating' },
    { name: 'popularity (ASC)', sortProperty: '-rating' },
    { name: 'prices (DESC)', sortProperty: 'price' },
    { name: 'prices (ASC)', sortProperty: '-price' },
    { name: 'alphabet (DESC)', sortProperty: 'title' },
    { name: 'alphabet (ASC)', sortProperty: '-title' },
  ];

  const onClickListItem = (obj) => {
    onClickSort(obj);
    setIsVisible(false);
  };

  return (
    <div className='sort'>
      <div onClick={() => setIsVisible(!isVisible)} className='sort__label'>
        <Icon name='sort' size='large' />
        <b>Sort by:</b>
        <span>{value.name}</span>
      </div>
      {isVisible && (
        <div className='sort__popup'>
          <ul>
            {sortList.map((obj, index) => (
              <li
                key={index}
                onClick={() => onClickListItem(obj)}
                className={value.sortProperty === obj.sortProperty ? 'active' : ''}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
