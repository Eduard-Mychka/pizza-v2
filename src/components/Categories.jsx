import { useState } from 'react';

function Categories() {
  return (
    <div className='categories'>
      <ul>
        <li className='active'>Всі</li>
        <li>М'ясні</li>
        <li>Вегетаріанська</li>
        <li>Гриль</li>
        <li>Гострі</li>
        <li>Закриті</li>
      </ul>
    </div>
  );
}

export default Categories;
