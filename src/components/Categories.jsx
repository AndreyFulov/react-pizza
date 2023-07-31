import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategoryType } from '../redux/slices/filterSlice';

function Catergories() {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const count = useSelector((state) => state.filter.category);
  const dispatch = useDispatch();
  return (
    <div class="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            class={count === i ? 'active' : ''}
            onClick={() => dispatch(changeCategoryType(i))}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Catergories;
