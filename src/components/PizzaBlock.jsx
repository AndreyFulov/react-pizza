import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

function PizzaBlock(props) {
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === props.id));
  const dispatch = useDispatch();

  const addedCount = cartItem ? cartItem.count : 0;
  const onClickAdd = () => {
    const item = {
      id: props.id,
      unicId: props.id.toString() + activeType.toString() + activeSize.toString(),
      title: props.title,
      price: props.price,
      img: props.img,
      type: activeType,
      size: activeSize,
    };

    dispatch(addItem(item));
  };
  return (
    <div class="pizza-block">
      <img class="pizza-block__image" src={props.img} alt="Pizza" />
      <h4 class="pizza-block__title">{props.title}</h4>
      <div class="pizza-block__selector">
        <ul>
          {props.types.map((value, id) => (
            <li
              key={value}
              class={activeType === id ? 'active' : ''}
              onClick={() => setActiveType(id)}>
              {value === 0 ? 'тонкое' : 'традиционное'}
            </li>
          ))}
        </ul>
        <ul>
          {props.sizes.map((value, id) => (
            <li
              key={value}
              class={activeSize === id ? 'active' : ''}
              onClick={() => setActiveSize(id)}>
              {value} см
            </li>
          ))}
        </ul>
      </div>
      <div class="pizza-block__bottom">
        <div class="pizza-block__price">от {props.price} ₽</div>
        <div class="button button--outline button--add" onClick={onClickAdd}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"></path>
          </svg>
          <span>Добавить</span>
          {addedCount > 0 ? <i>{addedCount}</i> : ''}
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;
